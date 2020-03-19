<template>
  <div class="GuidanceContent">
    <div id="printContent">
      <Plan></Plan>
    </div>
     <el-dialog title="提示" :visible.sync="mobileTips1" width="30%">
      <div>网址：{{url}}</div>
      <div>验证码：{{code}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button style="margin:auto" type="primary" @click="send_message">确认发送</el-button>
      </div>
    </el-dialog>
    <el-dialog title="发送" :visible.sync="mobileTips2" width="30%">
      <div class="tips-title">将此健康管理检验报告发送至</div>
      <el-row type="flex" align='center'>
      <div class="tips-info">姓名：</div><div>{{name}}</div>
      </el-row>
      <el-row type="flex" align='center'>
      <div class="tips-info">身份证号：</div><div>{{this.$route.query.id_card}}</div>
      </el-row>
      <el-row type="flex" align='center' class="sendmsg">
        <div class="tips-info">手机号:</div>
        <el-input v-if="edit" disabled v-model="phone"></el-input>
        <el-input v-else v-model="phone" :placeholder='phone'></el-input>
        <a class="tips-info" @click="edit = false">编辑</a>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button style="margin:auto" type="primary" @click="send_message">确认发送</el-button>
      </div>
    </el-dialog>
    <div class="rightbar">
      <div class="bar-btn">
        <el-button class="rightbar-btn" @click="print">打 印</el-button>
        <el-button  class="rightbar-btn" @click="deliver_report">发 送</el-button>
      </div>
      <el-button class="rightBarBtn" @click="backSigning">回到首页</el-button>
    </div>
  </div>
</template>
<script>
import Plan from "./plan";
import html2canvas from "html2canvas";
export default {
  name: "healthGuidance",
  components: {
    Plan
  },
  data() {
    return {
      mobileTips1: false,
      mobileTips2: false,
      name:'',
      phone:'',
      edit: true,
      code: "",
      url: ""
    };
  },
  mounted() {},
  created() {
  },
  watch: {},
  computed: {},
  methods: {
    print() {
      let bdHtml = window.document.getElementById("printContent").innerHTML;
      window.document.body.innerHTML = bdHtml;
      window.print();
      window.location.reload();
      return false;
    },
    backSigning() {
      this.$router.push({
        path: "/signing"
      });
    },
    deliver_report() {
      this.$axios({
        method: "get",
        url: "/DHT/send_message_info",
        params: {
          id_card: this.$route.query.id_card
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        if (res.data.code != 200) alert(res.data.msg);
        else {
          if (this.$store.state.name == "测试账户") {
            this.mobileTips1 = true;
            this.$axios({
              method: "get",
              url: "/DHT/send_mission_code",
              params: {
                id_card: this.$route.query.id_card
              },
              headers: { session: this.$store.state.session }
            }).then(res=>{
              this.url=res.data.data.url
              this.code=res.data.data.code
            });
          } else {
            this.mobileTips2 = true;
          }
          this.name=res.data.data.name
          this.phone=res.data.data.phone_num
          // this.isdeliver = true;
          // this.$store.commit("setisdeliver", true);
        }
      });
    },
    send_message(){
      this.$axios({
        method: "post",
        url: "/DHT/send_mission_message",
        data: {
          id_card: this.$route.query.id_card,
          name:this.name,
          phone_num:this.phone
        },
        headers: { session: this.$store.state.session }
      }).then(res=>{
        if(res.data.code!=200){
          return alert(res.data.msg)
        }else{
          this.mobileTips1=false;
          this.mobileTips2=false;
        }
      })
    }
  }
};
</script>
<style>
.sendmsg .el-input{
  width:200px;
}
.sendmsg .el-input .el-input__inner{
  height: 30px;
  width:200px;
}
</style>
<style scoped>
body {
  background: rgba(229, 229, 229, 1);
}
.tips-info{
  white-space: nowrap;
  min-width:70px;
  align-items: center;
}
.sendmsg{
  align-items: center;
}
.GuidanceContent {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 1%;
  height: 100%;
  font-size: 20px;
  background: rgba(229, 229, 229, 1);
}
#printContent {
  width: 66.5%;
  height: 100%;
  overflow: auto;
  background-color: white;
}
.planContent {
  width: 100%;
}
.rightbar {
  top: 0;
  width: 32.5%;
  height: 100%;
  background-color: white;
  margin-left: 20px;
}
.bar-btn {
  width: 90%;
  margin: 20px 5%;
  /* margin-left: 20px; */
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}
.rightbar .rightBarBtn {
  width: 90%;
  margin:0 5%;
  background-color: #4eb7e5;
  color:white !important;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
}
.bar-btn .rightbar-btn {
  background-color: #4eb7e5;
  font-size: 20px;
  font-weight: bold;
  color:white !important;
  width: 50%;
  height: 40px;
}

</style>