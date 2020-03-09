<template>
  <div class="riskReport">
    <div class="feedBack">
      <el-dialog class="dialogContent" title="病人反馈" :visible.sync="isTwice">
        <div class="fb-title">上次健康管理意见反馈</div>
        <div class="timeCycle">随访周期：{{feedbacks.period}}</div>
        <el-form
          v-for="(item,key,index) in feedbacks.last_mission_list"
          :key="index"
          class="feedback"
        >
          <div class="mission">{{item.mission}}</div>
          <div v-for="(goal,val,pos) in item.smart_goal_list" :key="pos" class="smart_goal">
            <div class="plan">{{goal.content}}</div>
            <el-radio v-model="goal.status" label="是" key="1">是</el-radio>
            <el-radio v-model="goal.status" label="否" key="0">否</el-radio>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button style="margin:auto" type="primary" @click="planShowTwice">生成健康管理计划</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="planDrawer">
      <el-drawer size="48%" title="健康计划" :visible.sync="show">
        <div class="drawer-content">
          <el-input class="timeCycle" disabled v-model="cycle"></el-input>
          <div :minselect="minselect">每个大项需选择{{minselect}}条建议提供给患者改善</div>
          <div class="tips">根据病人的情况，我们建议：</div>
          <div class="drawer-container">
            <div v-for="(item,i) in mission_detail_list" :key="i">
              <div class="firstStandard">
                <img src="../../assets/dropdown.png" />
                <div class="first-title">{{item.mission}}</div>
              </div>
              <el-collapse v-model="activeName" @change="handleChange">
                <div
                  v-for="(smg,key,index) in item.smart_goal_list"
                  :key="key"
                  class="secondStandard"
                >
                  <el-collapse-item :title="key" :name="index">
                    <el-checkbox-group
                      :max="minselect"
                      v-model="checkList[i]"
                      @change="handleChange"
                    >
                      <el-checkbox
                        v-for="(tItem,index) in smg"
                        @change="getChecked(i,item.mission,tItem)"
                        :key="index"
                        :label="tItem.smart_goal_id"
                      >{{tItem.content}}</el-checkbox>
                    </el-checkbox-group>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
            <el-checkbox v-model="isRisk">
              <span
                style="color:black;font-size:18px;font-weight:bold;margin-bottom:30px;margin-top:10px;"
              >新型冠状病毒COVID-19健康宣教</span>
            </el-checkbox>
            <div class="adds">
              其他建议
              <div class="add">
                <el-select v-model="mission_name" placeholder="任务类别">
                  <el-option
                    v-for="item in mission_name_list"
                    :key="item"
                    :label="item"
                    :value="item"
                  ></el-option>
                </el-select>
                <el-input placeholder="请输入其他建议" v-model="add"></el-input>
                <el-button type="primary" @click="addSuggestion">添加</el-button>
              </div>
            </div>
            <div class="otheradds">
              <div v-for="(item,index) in doctor_missions" :key="index">
                <div
                  style="color:black;font-size:18px;font-weight:bold;margin-bottom:30px;margin-top:10px;"
                >{{item.mission}}</div>
                <div v-for="(s,pos) in item.smart_goal_list" :key="pos" style="height:45px;">
                  <el-checkbox
                    checked
                    :disabled="checkList[index].length==minselect"
                    style="font-size:18px;"
                    @change="addDoctor(s,item.mission)"
                    :key="s.smart_goal_id"
                    :label="s.smart_goal_id"
                  >{{s.content}}</el-checkbox>
                  <el-button
                    style="float:right"
                    @click="deleteSuggestion(index,pos,s.smart_goal_id,item.mission)"
                  >删除</el-button>
                </div>
              </div>
            </div>
            <div slot="footer" class="drawer-footer">
              <el-button style="float:right;" type="primary" @click="goGuidance">确 认</el-button>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
    <div id="printContent">
      <RiskReport :info="info"></RiskReport>
    </div>
    <div class="rightbar">
      <div class="bar-btn">
        <el-button type="primary" @click="print">打 印</el-button>
        <el-button type="primary" @click="deliver_mission">发 送</el-button>
      </div>
      <el-button type="primary" @click="planShow">进入健康管理</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="mobileTips" width="30%">
      <div>网址：{{url}}</div>
      <div>验证码：{{code}}</div>
    </el-dialog>
  </div>
</template>
<script>
import RiskReport from "./report";
export default {
  name: "riskReport",
  components: {
    RiskReport
  },
  data() {
    return {
      url: "",
      code: "",
      isdeliver: this.$store.state.isdeliver,
      mobileTips: false,
      minselect: 0,
      activeName: [0],
      isTwice: false,
      isRisk: true,
      show: false,
      checkList: [[]],
      doctor_missions: [],
      cycle: "1个月",
      feedbacks: [],
      mission_detail_list: [],
      mission_name_list: [],
      missions: [""],
      mission_name: "",
      add: "",
      info: ""
    };
  },
  created() {
    this.isReport(JSON.parse(this.$store.state.report))
    this.info = JSON.parse(this.$store.state.report);
    
  },
  watch: {},
  computed: {},
  methods: {
    isReport(report){
      if(!report.BodyValue&&!report.Urine&&!report.BloodPressure&&!report.BloodLipid&&!report.Liver&&!report.Hepatitis&&!report.Blood&&!report.Electrolyte&&!report.BloodSugar&&!report.Kidney){
        this.show=true
        this.$axios({
          method: "get",
          url: "/DHT/generate_smart_goal",
          params: {
            id_card: this.$route.query.id_card
          },
          headers: { session: this.$store.state.session }
        }).then(res => {
          if (res.data.data.need_show_up) {
            this.show=false
            this.isTwice = true;
            // this.feedbacks = res.data.data.smart_goal_data;
            this.feedbacks = JSON.parse(
              JSON.stringify(res.data.data.smart_goal_data).replace(
                /smart_goal/g,
                "smart_goal_list"
              )
            );
          } else
            this.$axios({
              method: "get",
              url: "/DHT/mission_page",
              params: {
                id_card: this.$route.query.id_card
              },
              headers: { session: this.$store.state.session }
            }).then(res => {
              this.mission_detail_list = res.data.data.mission_detail_list;
              this.mission_name_list = res.data.data.mission_name_list;
              this.mission_name = this.mission_name_list[0];
              this.cycle = res.data.data.period;
              let a = new Array();
              this.missions = new Array(res.data.data.mission_name_list.length)
                .fill(null)
                .map((item, index) => {
                  var a = new Object();
                  a.mission = this.mission_name_list[index];
                  a.smart_goal_list = [];
                  return a;
                });
              this.checkList = new Array(res.data.data.mission_name_list.length)
                .fill(null)
                .map(item => {
                  return new Array();
                });
              this.doctor_missions = res.data.data.doctor_missions;
              this.minselect = res.data.data.smart_goal_need_selected_num;
              this.show = true;
              this.isRisk = res.data.nCov;
            });
        });
      }
    },
    click(goal) {
      // console.log(goal)
      // console.log(this.feedbacks['smart_goal_list'])
    },
    print() {
      let bdHtml = window.document.body.innerHTML;
      let printHtml = window.document.getElementById("printContent").innerHTML;
      this.isdeliver = true;
      this.$store.commit('setisdeliver',true)
      window.document.body.innerHTML = printHtml;
      window.print();
      window.location.reload();
      return false;
    },
    handleChange(val) {
      this.$emit("change", this.checked);
    },
    getChecked(i, mission, tItem) {
      this.missions[i].mission = mission;
      let pos = this.missions[i].smart_goal_list.findIndex(item => {
        return item == tItem.smart_goal_id.toString();
      });
      if (pos < 0)
        this.missions[i].smart_goal_list.push(tItem.smart_goal_id.toString());
      else {
        this.missions[i].smart_goal_list.splice(pos, 1);
      }
    },
    addDoctor(item, mission) {
      let pos = this.getMissionNum(mission);
      // this.checkList[pos].push(item.smart_goal_id)
      if (this.missions[pos].smart_goal_list.length < this.minselect) {
        if (pos >= 0) {
          let inMission = this.missions[pos].smart_goal_list.findIndex(id => {
            return id == item.smart_goal_id;
          });
          let inCheck = this.checkList[pos].findIndex(id => {
            return id == item.smart_goal_id;
          });
          if (inCheck >= 0) this.checkList[pos].splice(inCheck, 1);
          else this.checkList[pos].push(inCheck);
          if (inMission >= 0)
            this.missions[pos].smart_goal_list.splice(inMission, 1);
          else this.missions[pos].smart_goal_list.push(item.smart_goal_id);
        }
      } else {
        return alert(
          "您选择的" +
            mission +
            "该类建议超过五条，如果您需要使用自主添加的建议，请对该类通用建议进行删减再提交"
        );
      }
    },
    planShow() {
      if (this.isdeliver) {
        this.$axios({
          method: "get",
          url: "/DHT/generate_smart_goal",
          params: {
            id_card: this.$route.query.id_card
          },
          headers: { session: this.$store.state.session }
        }).then(res => {
          if (res.data.data.need_show_up) {
            this.isTwice = true;
            // this.feedbacks = res.data.data.smart_goal_data;
            this.feedbacks = JSON.parse(
              JSON.stringify(res.data.data.smart_goal_data).replace(
                /smart_goal/g,
                "smart_goal_list"
              )
            );
          } else
            this.$axios({
              method: "get",
              url: "/DHT/mission_page",
              params: {
                id_card: this.$route.query.id_card
              },
              headers: { session: this.$store.state.session }
            }).then(res => {
              this.mission_detail_list = res.data.data.mission_detail_list;
              this.mission_name_list = res.data.data.mission_name_list;
              this.mission_name = this.mission_name_list[0];
              this.cycle = res.data.data.period;
              let a = new Array();
              this.missions = new Array(res.data.data.mission_name_list.length)
                .fill(null)
                .map((item, index) => {
                  var a = new Object();
                  a.mission = this.mission_name_list[index];
                  a.smart_goal_list = [];
                  return a;
                });
              this.checkList = new Array(res.data.data.mission_name_list.length)
                .fill(null)
                .map(item => {
                  return new Array();
                });
              this.doctor_missions = res.data.data.doctor_missions;
              this.minselect = res.data.data.smart_goal_need_selected_num;
              this.show = true;
              this.isRisk = res.data.nCov;
            });
        });
      } else
        return alert("您未打印或发送报告至患者，请打印或发送后进入健康管理页面");
    },
    planShowTwice() {
      let feeds = JSON.parse(JSON.stringify(this.feedbacks));
      for (let item of feeds.last_mission_list) {
        for (let i of item.smart_goal_list) {
          if (i.status == null) return alert("您还未反馈完所有建议！");
          else {
            i.smart_goal_id = i.sg_id;
            delete i["content"];
            delete i["sg_id"];
          }
        }
      }
      this.$axios({
        method: "post",
        url: "/DHT/feedback",
        data: {
          id_card: this.$route.query.id_card,
          feedBack: feeds.last_mission_list
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        if (res.data.code == 200) this.isTwice = false;
        this.$axios({
          method: "get",
          url: "/DHT/mission_page",
          params: {
            id_card: this.$route.query.id_card
          },
          headers: { session: this.$store.state.session }
        }).then(res => {
          this.mission_detail_list = res.data.data.mission_detail_list;
          this.mission_name_list = res.data.data.mission_name_list;
          this.missions = new Array(res.data.data.mission_name_list.length)
            .fill(null)
            .map((item, index) => {
              var a = new Object();
              a.mission = this.mission_name_list[index];
              a.smart_goal_list = [];
              return a;
            });
          this.checkList = new Array(res.data.data.mission_name_list.length)
            .fill(null)
            .map(item => {
              return new Array();
            });
          this.doctor_missions = res.data.data.doctor_missions;
          this.minselect = res.data.data.smart_goal_need_selected_num;
          this.show = true;
        });
      });
    },
    getMissionNum(mission) {
      let pos = this.missions.findIndex(item => {
        return item.mission == mission;
      });
      return pos;
    },
    goGuidance() {
      this.$axios({
        method: "post",
        url: "/DHT/upload_doctor_missions",
        data: {
          id_card: this.$route.query.id_card,
          doctor_missions: this.doctor_missions
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        for (let i of this.missions) {
          if (i.smart_goal_list.length < this.minselect)
            return alert(
              "您勾选" + i.mission + "该类建议数目不足请勾选满5条再提交"
            );
        }
        if (res.data.code == 200) {
          this.$store.commit("setnCov", this.isRisk);
          this.$axios({
            method: "post",
            url: "/DHT/mission_page",
            data: {
              id_card: this.$route.query.id_card,
              selectList: this.missions,
              nCov: this.isRisk,
              period: this.cycle
            },
            headers: { session: this.$store.state.session }
          }).then(res => {
            if (res.data.code == 200) {
              this.$router.push({
                path: "/signing/guidance",
                query: {
                  id_card: this.$route.query.id_card
                }
              });
            } else {
              alert(res.data.msg);
            }
          });
        } else {
          alert(res.data.msg);
        }
      });
    },
    addSuggestion() {
      let position = this.getMissionNum(this.mission_name);
      if (this.missions[position].smart_goal_list.length == this.minselect) {
        this.add = "";
        return alert(
          "您选择的" +
            this.mission_name +
            "该类建议超过五条，如果您需要使用自主添加的建议，请对该类通用建议进行删减再提交"
        );
      }
      if (!this.add.match(/^\s*$/)) {
        let time = new Date().valueOf().toString() + this.$store.state.doctorId;
        let advice = {
          mission: this.mission_name,
          smart_goal_list: [
            {
              smart_goal_id: time,
              content: this.add
            }
          ]
        };
        let pos = this.doctor_missions.findIndex(item => {
          return item.mission == this.mission_name;
        });
        if (pos >= 0) {
          this.doctor_missions[pos].smart_goal_list.push({
            smart_goal_id: time,
            content: this.add
          });
        } else {
          this.doctor_missions.push(advice);
        }
        let position = this.getMissionNum(this.mission_name);
        if (this.missions[position].smart_goal_list.length < this.minselect) {
          this.missions[position].smart_goal_list.push(time);
          this.checkList[position].push(time);
        }
        this.add = "";
      } else {
        alert("不能输入空建议!");
        this.add = "";
      }
    },
    deleteSuggestion(index, pos, id, mission) {
      this.doctor_missions[index].smart_goal_list.splice(pos, 1);
      let i = this.getMissionNum(mission);
      let position = this.missions[i].smart_goal_list.findIndex(item => {
        return item == id;
      });
      let loc = this.checkList[i].findIndex(item => {
        return item == id;
      });
      this.checkList[index].splice(loc, 1);
      this.missions[index].smart_goal_list.splice(position, 1);
    },
    deliver_mission() {
      this.$axios({
        method: "get",
        url: "/DHT/send_report_code",
        params: {
          id_card: this.$route.query.id_card
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        if (res.data.code != 200) alert(res.data.msg);
        else {
          this.mobileTips = true;
          this.url = res.data.data.url;
          this.code = res.data.data.code;
          this.isdeliver = true;
          this.$store.commit('setisdeliver',true)
        }
      });
    }
  }
};
</script>
<style scoped>
.tips {
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 15px;
}
.riskReport {
  display: flex;
  justify-content: start;
  flex-direction: row;
  margin-top: 1%;
  height: 83vh;
  width: 100%;
  font-size: 20px;
  background-color: rgba(229, 229, 229, 1);
}
.timeCycle {
  width: 36.3%;
}
#printContent {
  width: 66.6%;
  height: 100%;
  background-color: white;
  overflow: auto;
}
#printContent RiskReport {
  width: 100%;
  background-color: white;
}

.rightbar {
  top: 0;
  width: 32.5%;
  height: 100%;
  background-color: white;
  margin-left: 20px;
}
.bar-btn {
  width: 150px;
  /* margin-left: 20px; */
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}
.rightbar .el-button {
  width: 200px;
  margin-left: 20px;
  background-color: #4eb7e5;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
}
.bar-btn .el-button {
  background-color: #4eb7e5;
  font-size: 20px;
  font-weight: bold;
  width: 90px;
  height: 40px;
}

.drawer-container {
  /* height: 100vh; */
  overflow: auto;
}
.el-drawer__container .el-drawer {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.el-drawer__body {
  height: 0;
}
.drawer-content {
  height: 100vh;
  margin-left: 20px;
  margin-right: 20px;
  overflow: scroll;
}
.el-collapse {
  border: 1px solid white;
}
.el-collapse-item__header {
  border-bottom: 1px solid white;
}
.el-collapse-item__wrap {
  border: 1px solid white;
  border-bottom: 1px solid white;
}

.el-checkbox-group {
  display: flex;
  flex-direction: column;
}
.el-checkbox,
.el-checkbox__input {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
}
.firstStandard {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0px 5px 0px;
}
.firstStandard img {
  width: 25px;
  font-size: 16px;
  margin-right: 3px;
  margin-left: 3px;
}
.secondStandard {
  margin-left: 25px;
  font-size: 16px;
  padding: 0 10px;
}
.secondStandard .el-form {
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.adds {
  font-size: 16px;
  font-weight: bold;
  bottom: 10px;
}
.add {
  display: flex;
  flex-direction: row;
}
.otheradds {
  font-size: 16px;
  margin-top: 10px;
  color: rgba(0, 110, 182, 1);
}

.fb-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}
.timeCycle {
  margin-bottom: 15px;
  font-size: 16px;
}
.smart_goal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3px;
}
.smart_goal .plan {
  width: 500px;
}
.feedback {
  margin-top: 10px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.feedback .mission {
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
}
.dialog-footer {
  margin-top: 15px;
  margin-bottom: 15px;
}
.drawer-footer {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 403.41px;
  height: 100px;
}
.drawer-footer .el-button {
  width: 200px;
  margin: 0 50% 0 50%;
}
</style>