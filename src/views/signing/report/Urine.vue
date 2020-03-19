<template>
  <div class="module-container">
    <div class="part1">
      
      <div class="aside">
        <sideDemo1 color="#8F82BC" height="34.5mm" headline="尿检检测数值"></sideDemo1>
      </div>
      <div class="tableRight every half">
        <table>
          <tr style="height:5mm;background-color:#8F82BC;">
            <td style="width:40mm;"></td>
            <td style="width:36mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;">{{info.Urine.date_list[0]==null?'':info.Urine.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Urine.date_list[1]==null?'':info.Urine.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Urine.date_list[2]==null?'':info.Urine.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Urine.uma!==null">
            <td>蛋白</td>
            <td>0-80mg/24h</td>
            <td>
              
            </td>
              <td v-for="(item,index) in info.Urine.uma" :key="index">
                <span>{{item==null?'':item}}</span>
              </td>
          </tr>
          <tr v-if="info.Urine.uob!==null" style="background-color:#E6E2F3;">
            <td>隐血</td>
            <td>＜3个RBC(HP)</td>
            <td>
              
            </td>
              <td style="background-color:#ccc5e2;">
                <span>{{info.Urine.uob[0]==null?'':info.Urine.uob[0]}}</span>
              </td>
              <td>
                <span>{{info.Urine.uob[1]==null?'':info.Urine.uob[1]}}</span>
              </td>
              <td>
                <span>{{info.Urine.uob[2]==null?'':info.Urine.uob[2]}}</span>
              </td>
          </tr>
          <tr>
            <td>pH</td>
            <td>6.0-6.5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>比重</td>
            <td>1.015~1.025</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>沉渣</td>
            <td>红细胞（RBC）＜3个/HP，白细胞＜5 个/HP，肾小管上皮 偶见/HP，鳞状或者移行上皮 偶见/HP，透明管型＜2个/低倍视野</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div style="display:inline-block;">
        <warnNotitle></warnNotitle>
      </div>
    </div>
    <div class="part1">
      <div class="aside">
        <sideDemo1 color="#5E92C7" height="36.2mm" headline="尿检检测评估"></sideDemo1>
      </div>
      <div class="tableRight every">
        <table style="height:36mm;">
          <tr style="height:7.8mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:41mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">蛋白</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">检查是否有肾脏疾病和肾功能低下。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6.6mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">隐血</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">检查肾、尿路是否有出血。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">pH</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">检查尿的酸 • 碱性。一般为弱酸性。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6.6mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">比重</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">检查尿中水和其他成分的比率。随水分摄取量、肾功能、尿酸、糖、蛋白质等的影响而变化，有助于对肾功能衰竭和糖尿病的判断。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">pH</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">用离心分离器来检查尿的成分。来诊断肾疾病和结石、感染症。</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import sideDemo1 from "./common/sideDemo1";
import sideDemo from "./common/sideDemo";
import warnNotitle from "./common/warnNotitle";
import Chart from "../components/chart";
export default {
  data() {
    return {
      name: this.info.PersonInfo.name,
      date: "",
 
    };
  },
  components: {
    sideDemo,
    sideDemo1,
    warnNotitle,
    Chart
  },
  props: ["info"],
  methods: {}
};
</script>

<style scoped>
.line {
  width: 200.7mm;
  height: 2px;
  background: rgba(94, 146, 199, 1);
  margin-top: 4.5mm;
  margin-left: 7.8mm;
}
.module-container {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  vertical-align: middle;
}
.part1 {
  width: 100%;
}
.container-head {
  margin-top: 3mm;
  margin-left: 7.8mm;
  width: 200.7mm;
  height: 10.7mm;
  background: rgba(94, 146, 199, 1);
  border-radius: 0px 29px 0px 29px;
  text-align: center;
}


.part1 {
  width: 100%;
  margin-left: 7.8mm;
  margin-top: 3mm;
}

.aside {
  display: inline-block;
  vertical-align: top;
}

.tableRight {
  width: 80%;
  display: inline-block;
  vertical-align: top;
  margin-left: 28px;
}

.tableRight table {
  border: 2px solid #8f82bc;
  border-collapse: collapse;
  font-size: 3.18mm;
  font-family: Microsoft YaHei;
  font-weight: 400;
  width: 100%;
  color: rgba(35, 37, 39, 1);
}

.half table {
  height: 34mm;
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;
  font-size: 3.18mm;
}

.half table tr {
  height: 5.8mm;
}

.half table tr td {
  border: 1px solid #8f82bc;
  text-align: center;
}

.half table tr td:first-child {
  text-align: left;
}

.half table tr td:first-child div {
  padding-left: 2mm;
}
.isScale {
  font-size: 3.18mm;
  padding-left: 10px;
  transform-origin: 0 0;
}

.outBox {
  box-sizing: border-box;
  padding-left: 4mm;
  overflow: hidden;
}

.outBox .innerBox {
  font-size: 3.4mm;
  transform-origin: 0 0;
}
</style>
