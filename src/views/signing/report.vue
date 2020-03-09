<template>
  <div class="reportContent">
    <div class="container" style="height:350mm">
      <div class="page-container">
        <div class="part1-header">
          <div class="title">
            <span>
              慢病风险
              <br />及生活健康检验报告
            </span>
          </div>
          <div class="entitle">
            <span>CHRONIC DISEASE RISK AND LIFE STYLE</span>
            <br />
            <span>EVALUATION REPORT</span>
          </div>
          <div class="title-contain">
            <span>该程序中的所有健康相关信息均为循证实践。参考文献是国家指南和专业实践手册，包括但不限于：</span>
          </div>
          <div class="contain-bottom">
            <div class="outline">
              <div class="rel">
                <span class="scale">-中国2型糖尿病防治指南（2017年版）</span>
                <br />
                <span class="scale">-中国成人超重和肥胖症预防控制指南</span>
                <br />
                <span class="scale">-中国居民膳食指南（2016）</span>
              </div>
              <span class="scale">-中国高血压防治指南2018 年修订版</span>
              <br />
              <span class="scale">-中国心血管病预防指南（2017）</span>
              <br />
              <span class="scale">-中国心血管病预防指南（2017）</span>
              <br />
              <span class="scale">-中国糖尿病医学营养治疗指南（2015）</span>
              <br />
              <span
                class="scale"
              >-American Diabetes Association: Standards of Medical Care in Diabetes – 2019</span>
              <br />
              <span
                class="scale"
              >-2019 ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease</span>
              <br />
              <span
                class="scale"
              >-2013 AHA/ACC Guideline on Lifestyle Management to Reduce Cardiovascular Risk</span>
              <br />
              <span class="scale">-The Academy of Nutrition and Dietetics Nutrition Care Manual</span>
              <span class="scale">
                (1)2019 ESC Guidelines on diabetes, pre-diabetes, and cardiovascular diseases developed in
                collaboration
                with the EASD: The Task
              </span>
              <span class="scale">
                Force for diabetes, pre-diabetes, and cardiovascular diseases of the European Society of Cardiology
                (ESC) and the European Associa-
              </span>
              <span class="scale">tion for the Study of Diabetes (EASD)</span>
              <span class="scale">
                (2)2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes: The Task Force
                for the diagnosis and man-
              </span>
              <span
                class="scale"
              >agement of chronic coronary syndromes of the European Society of Cardiology (ESC)</span>
              <span class="scale">
                (3)2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce
                cardiovascular risk :
                The Task Force
              </span>
              <span class="scale">
                for the management of dyslipidaemias of the European Society of Cardiology (ESC) and European
                Atherosclerosis Society (EAS)
              </span>
            </div>
          </div>
        </div>
        <div class="part1-footer">
        <div id="test">
          <div>
            <span class="footer-title">检测项目：</span>
          </div>
          <div class="boxs">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="BodyValue">身体检测</el-checkbox>
              <el-checkbox label="Urine">尿检</el-checkbox>
              <el-checkbox label="BloodPressure">循环系统</el-checkbox>
              <el-checkbox label="BloodLipid">血脂</el-checkbox>
              <el-checkbox label="Liver">肝功能</el-checkbox>
              <el-checkbox label="Hepatitis">肝炎</el-checkbox>
              <el-checkbox label="Blood">血常规</el-checkbox>
              <el-checkbox label="Electrolyte">电解质</el-checkbox>
              <el-checkbox label="BloodSugar">血糖</el-checkbox>
              <el-checkbox label="kidney">肾</el-checkbox>
              <el-checkbox label="尿酸"></el-checkbox>
              <el-checkbox label="骨密度"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="infoTable">
            <div class="infoContent">
              <div class="infoTitle">个人信息</div>
              <table class="infoContent">
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">姓名</span>
                    <span class="tabletext">{{info.PersonInfo.name}}</span>
                  </td>
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">随访日期</span>
                    <span class="tabletext">{{info.PersonInfo.visit_date}}</span>
                  </td>
                </tr>
                <tr style="border: 1px solid #5E92C7;border-right:none;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">年龄</span>
                    <span class="tabletext">{{info.PersonInfo.age}}</span>
                  </td>
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">性别</span>
                    <span style="margin-left:9mm;">
                      <el-checkbox-group v-model="gender" style="display:inline-block;">
                        <el-checkbox v-for="item in sex" :key="item" :label="item">{{item}}</el-checkbox>
                      </el-checkbox-group>
                    </span>
                  </td>
                </tr>
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td style="border-right: 1px solid #5E92C7;">
                    <span class="tabletext">身高</span>
                    <span class="tabletext">
                      <span v-if="info.BodyValue!==null&&info.BodyValue.height_list!==null">
                        <span
                          v-if="info.BodyValue.height_list[0].length!=0"
                        >{{info.BodyValue.height_list[0]}}cm</span>
                        <span v-else>无数据</span>
                      </span>
                      <span v-else>无数据</span>
                    </span>
                  </td>
                  <td>
                    <span class="tabletext">体重</span>
                    <span class="tabletext">
                      <span v-if="info.BodyValue!==null&&info.BodyValue.weight_list!==null">
                        <span
                          v-if="info.BodyValue.weight_list[0].length!=0"
                        >{{info.BodyValue.weight_list[0]}}kg</span>
                        <span v-else>无数据</span>
                      </span>
                      <span v-else>无数据</span>
                    </span>
                  </td>
                </tr>
                <tr style="background-color:#E6F2FF;border: 1px solid #5E92C7;">
                  <td colspan="2">
                    <span class="tabletext">随访类型</span>
                    <el-checkbox label="高血压" v-model="is_hypertension"></el-checkbox>
                    <el-checkbox label="糖尿病" v-model="is_diabetes"></el-checkbox>
                    <el-checkbox label="老人" v-model="is_old_person"></el-checkbox>
                    <el-checkbox label="一般人群" v-model="is_normal"></el-checkbox>
                  </td>
                </tr>
              </table>
            </div>
            <div class="logo">
              <img src="../../assets/new/logo.png" alt />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Header :name="info.PersonInfo.name" :date="info.PersonInfo.visit_date"></Header>
    <div class="module">
      <RecentRisk></RecentRisk>
    </div>
    <div v-if="BodyValue" id="BodyValue" class="module container">
      <BodyValue :info="info"></BodyValue>
    </div>
    <div id="Estimated" v-if="Estimated" class="module">
      <Estimated :info="info"></Estimated>
    </div>
    <div id="Urine" v-if="Urine" class="module">
      <Urine :info="info"></Urine>
    </div>
    <div v-if="BloodPressure" id="BloodPressure" class="module">
      <BloodPressure :info="info"></BloodPressure>
    </div>
    <div v-if="Liver" id="Liver" class="module">
      <Liver :info="info"></Liver>
    </div>
    <div v-if="BloodLipid" id="BloodLipid" class="module">
      <BloodLipid :info="info"></BloodLipid>
    </div>
    <div id="Hepatitis" v-if="Hepatitis" class="module">
      <Hepatitis :info="info"></Hepatitis>
    </div>
    <div v-if="Blood" id="Blood" class="module">
      <Blood :info="info"></Blood>
    </div>
    <div id="Electrolyte" v-if="Electrolyte" class="module">
      <Electrolyte :info="info"></Electrolyte>
    </div>
    <div id="BloodSugar" v-if="BloodSugar" class="module">
      <BloodSugar :info="info"></BloodSugar>
    </div>
    <div id="Kidney" v-if="Kidney" class="module">
      <Kidney :info="info"></Kidney>
    </div>
  </div>
</template>
<script>
import dom2image from 'dom-to-image'
import Header from "./report/header";
import RecentRisk from "./report/RecentRisk";
import BodyValue from "./report/BodyValue";
import Estimated from "./report/Estimated";
import Urine from "./report/Urine";
import BloodPressure from "./report/BloodPressure";
import BloodLipid from "./report/BloodLipid";
import Liver from "./report/Liver";
import Hepatitis from "./report/Hepatitis";
import Blood from "./report/Blood";
import Electrolyte from "./report/Electrolyte";
import BloodSugar from "./report/BloodSugar";
import Kidney from "./report/Kidney";
export default {
  data() {
    return {
      // info:'',
      // info: {"PersonInfo": {"name": "沈月飞", "gender": "男", "age": 58, "is_hypertension": "是", "is_diabetes": "否", "is_old_person": "否", "visit_date": "2020-02-26"}, "BodyValue": {"date_list": ["2019-12-09", "2019-11-21", "2019-05-15"], "height_list": ["170", "170", "170"], "weight_list": ["", "", "70"], "BMI_list": ["", "", "24.22"], "waist_list": ["", "", "88"], "EstimatedEnergyNeed": 1985, "EstimatedProteinNeed": "56.0-70.0", "EstimatedWaterNeed": 2100, "WeightChange": {"six_mouth_change": {"value": "-6.7", "symbol": "-"}, "three_mouth_change": {"value": "-6.7", "symbol": "-"}, "target": "合理减重每周0.5-1.0kg直到BMI<24"}, "WeightRange": [60, 74]}, "Urine": null, "BloodPressure": {"date_list": ["2019-12-09", "2019-11-21", "2019-05-15"], "SBP_list": ["135", "135", "124"], "DBP_list": ["85", "85", "86"], "average_BP_list": [101, 101, 98], "hypertension_risk": {"value": "您目前的血压没有达到高血压的诊断标准，但已经处于高危状态。", "SBP": "135", "DBP": "85"}}, "BloodLipid": {"date_list": ["2018-10-30", "2016-11-17", ""], "TC_list": ["4.15", "3.76", ""], "TG_list": ["1.79", "1.86", ""], "HDL_list": ["2.22", "0.85", ""], "LDL_list": ["1", "", ""], "BloodLipid_risk": {"value": "总胆固醇含量偏高。", "data": "总胆固醇4.15mmol/L。"}}, "Liver": {"date_list": ["2018-10-30", "2016-11-17", ""], "ALT": ["47", "12", ""], "AST": null, "ALB": null, "TBIL": ["14.1", "", ""]}, "Hepatitis": null, "Blood": {"date_list": ["2018-10-30", "2016-11-17", ""], "Hemoglobin": ["142", "141", ""], "WBC": ["", "5.01", ""], "Platelet": ["252", "247", ""]}, "Electrolyte": null, "BloodSugar": {"date_list": ["2018-10-30", "2017-07-29", "2016-11-17"], "FBS": ["6.55", "5.36", "6.67"], "GU": null, "HbAlc": null}, "Kidney": {"date_list": ["2018-10-30", "2016-11-17", ""], "CRE": ["88", "99", ""], "BUN": ["4.42", "", ""]}},
      checkList: [],
      is_hypertension: false,
      is_diabetes: false,
      is_old_person: false,
      is_normal: false,
      sex: ["男", "女"],
      gender: [],
      Blood: false,
      BodyValue: false,
      BloodPressure: false,
      BloodSugar: false,
      BloodLipid: false,
      Electrolyte: false,
      Estimated: false,
      Liver: false,
      Urine: false,
      Hepatitis: false,
      Kidney: false,
      modules: [[], []]
    };
  },
  mounted(){
  },
  created() {
    console.log(this.info);
    // console.log("刷新", this.info.BodyValue);
    this.getClass();
    this.getTest();
    // this.modules = new Array(2).fill(null).map(item => {
    //   return new Array();
    // });
    this.showModule();
  },
  components: {
    Header,
    RecentRisk,
    Blood,
    BodyValue,
    BloodPressure,
    BloodSugar,
    BloodLipid,
    Electrolyte,
    Estimated,
    Liver,
    Urine,
    Hepatitis,
    Kidney
  },
  props: ["info"],
  methods: {
    getClass() {
      if (this.info.PersonInfo.is_hypertension == "是")
        this.is_hypertension = true;
      if (this.info.PersonInfo.is_diabetes == "是") this.is_diabetes = true;
      if (this.info.PersonInfo.is_old_person == "是") this.is_old_person = true;
      if (
        this.info.PersonInfo.is_hypertension == "否" &&
        this.info.PersonInfo.is_diabetes == "否" &&
        this.info.PersonInfo.is_old_person == "否"
      )
        this.is_normal = true;
      this.gender.push(this.info.PersonInfo.gender);
    },
    getTest() {
      if (this.info.BodyValue) this.checkList.push("BodyValue");
      if (this.info.Urine) this.checkList.push("Urine");
      if (this.info.BloodPressure) this.checkList.push("BloodPressure");
      if (this.info.BloodLipid) this.checkList.push("BloodLipid");
      if (this.info.Liver) this.checkList.push("Liver");
      if (this.info.Hepatitis) this.checkList.push("Hepatitis");
      if (this.info.Blood) this.checkList.push("Blood");
      if (this.info.Electrolyte) this.checkList.push("Electrolyte");
      if (this.info.BloodSugar) this.checkList.push("BloodSugar");
      if (this.info.kidney) this.checkList.push("kidney");
    },
    toImage() {
      dom2image
        .toJpeg(document.getElementById("images"), {
          quality: 1,
          bgcolor: "white"
        })
        .then(function(dataUrl) {
          let img = new Image();
          img.src = dataUrl;
          // document.getElementById(imgstr).src=dataUrl
          document.getElementById("images").prepend(img);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
      // for (let i = 0; i < Math.ceil(this.modules[1]/2); i++) {
      //   let estr = "image" + i;
      //   console.log(estr,"str")
      //   dom2image
      //     .toJpeg(document.getElementById(estr), {
      //       quality: 1,
      //       bgcolor: "white"
      //     })
      //     .then(function(dataUrl) {
      //       let img = new Image();
      //       img.src = dataUrl;
      //       // document.getElementById(imgstr).src=dataUrl
      //       document.getElementById(estr).prepend(img);
      //     })
      //     .catch(function(error) {
      //       console.error("oops, something went wrong!", error);
      //     });
      // }
      // for(let i in this.modules[0]){
      //   dom2image
      //     .toJpeg(document.getElementById(i), {
      //       quality: 1,
      //       bgcolor: "white"
      //     })
      //     .then(function(dataUrl) {
      //       let img = new Image();
      //       img.src = dataUrl;
      //       // document.getElementById(imgstr).src=dataUrl
      //       document.getElementById(i).prepend(img);
      //     })
      //     .catch(function(error) {
      //       console.error("oops, something went wrong!", error);
      //     });
      // }
    },
    showModule() {
      if (this.info.Blood !== null) {
        this.Blood = true;
        // this.modules[0].push("Blood");
      }
      if (this.info.BloodPressure !== null) {
        this.BloodPressure = true;
        // this.modules[0].push("BloodPressure");
      }
      if (this.info.BloodLipid !== null) {
        this.BloodLipid = true;
        // this.modules[0].push("BloodLipid");
      }
      if (this.info.BloodSugar !== null) {
        this.BloodSugar = true;
        // this.modules[1].push("BloodSugar");
      }
      if (this.info.BodyValue !== null) {
        this.BodyValue = true;
        // this.modules[0].console.log(1)push("BodyValue");
        this.Estimated = true;
        // this.modules[1].push("Estimated");
      }
      if (this.info.Electrolyte !== null) {
        this.Electrolyte = true;
        // this.modules[1].push("Electrolyte");
      }
      if (this.info.Urine !== null) {
        this.Urine = true;
        // this.modules[1].push("Urine");
      }
      if (this.info.Liver !== null) {
        this.Liver = true;
        // this.modules[1].push("Liver");
      }
      if (this.info.Hepatitis !== null) {
        this.Hepatitis = true;
        // this.modules[1].push("Hepatitis");
      }
      if (this.info.Kidney !== null) {
        this.Kidney = true;
        // this.modules[1].push("Kidney");
      }
    },
    domInsert() {
      let strlist = [];
      if (this.modules[1].length % 2 == 0) {
        let i;
        for (i = 0; i < this.modules[1].length / 2; i++) {
          let str =
            "<" +
            this.modules[1][i] +
            ">" +
            "<" +
            "/" +
            this.modules[1][i] +
            ">" +
            "<" +
            this.modules[1][2 * i + 1] +
            ">" +
            "<" +
            "/" +
            this.modules[1][2 * i + 1] +
            ">";
          strlist.push(`<div id="image${i}" class="single-page">${str}</div>`);
        }
      } else {
        let i1;
        for (i1 = 0; i1 < this.modules[1].length - 1; i1++) {
          let str =
            "<" +
            this.modules[1][i1] +
            ">" +
            "<" +
            "/" +
            this.modules[1][i1] +
            ">" +
            "<" +
            this.modules[1][i1 + 1] +
            ">" +
            "<" +
            "/" +
            this.modules[1][i1 + 1] +
            ">";
          strlist.push(
            `<div id="image${i1}" class="single-page"><${str}></div>`
          );
          i1++;
        }
        strlist.push(
          `<div id="image${i1}" class="single-page"><${this.modules[1][i]}></${this.modules[1][i]}></div>`
        );
      }
      let ch;
      for (ch in strlist) {
        document.getElementById("images").appendChild(ch);
      }
    }
  }
  // props: ["info"]
};
</script>
<style lang="scss">
.singlePage {
  height: 297mm;
  width: 210mm;
}
.module {
  width: 210mm;
}
.boxs {
  width: 100%;
  height: 30%;
  margin-top: 5mm;
  line-height: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.boxs .el-checkbox {
  font-size: 4.23mm;
}

.el-checkbox__label {
  padding-left: 0;
  padding-right: 10px;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  /* height: 330mm; */
  vertical-align: middle;
  margin: 0 auto;
}
.module {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  vertical-align: middle;
  margin: 0 auto;
}
.part1-header {
  width: 100%;
  height: 60%;
  background: rgba(94, 146, 199, 1);
  border-radius: 0px 0px 0px 58px;
  box-shadow: 0px 20px 0px #2d659f;
  margin-bottom: 50px;
}

.bid {
  margin-left: 9.3mm;
  width: 38.4mm;
  height: 4.4mm;
  text-align: left;
  white-space: nowrap;
}

.bid .text {
  background: rgba(230, 242, 255, 1);
  border-radius: 8px;
  display: inline-block;
  font-size: 3.82mm;
  white-space: nowrap;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(45, 101, 159, 1);
  margin-top: 10mm;
  margin-left: 3.6mm;
}

.bid .progress {
  display: inline-block;
  margin-left: 4.4mm;
  margin-top: 10mm;
  width: 155mm;
  height: 3.5mm;
  opacity: 0.5;
  background: -webkit-repeating-linear-gradient(
    -45deg,
    #546e89 0px,
    #66809a 1px,
    #fff 0px,
    #a5c2e0 4px
  );
  position: relative;
  /* bottom: -6px; */
}

.part1-header .title {
  margin-top: 29mm;
  width: 669px;
  font-size: 60px;
  height: 200px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-left: 11.2mm;
}

.part1-header .entitle {
  font-size: 30px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-top: 3.7mm;
  margin-left: 11.2mm;
}

.title-contain {
  margin-top: 7.6mm;
  margin-left: 11.2mm;
  font-size: 15px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.contain-bottom {
  margin-top: 3mm;
  margin-left: 11.2mm;
  text-align: left;
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  font-size: 13px;
  word-wrap: break-word;
  word-break: normal;
  margin-bottom: 10px;
}
.part1-footer {
  width: 100%;
  height: 40%;
  margin-top: 20mm;
  margin-left: 13mm;
}

.part1-footer .footer-title {
  font-size: 4.23mm;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: rgba(94, 146, 199, 1);
  line-height: 16px;
}

.infoTable {
  width: 210mm;
  margin-top: 10mm;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}

.infoContent .infoTitle {
  width: 50%;
  height: 5.6mm;
  background: rgba(94, 146, 199, 1);
  border-radius: 0px 30px 0px 0px;
  text-align: center;
  font-size: 4.23mm;
  font-family: Microsoft YaHei;
  /* font-weight: bold; */
  color: rgba(255, 255, 255, 1);
}

.infoContent table {
  border-collapse: collapse;
  box-sizing: border-box;
  height: 50mm;
}

.infoContent table span.tabletext {
  font-size: 3.5mm;
  margin-left: 2.5mm;
  line-height: 6mm;
}
</style>
