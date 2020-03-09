<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo headline="每日营养需要量" height="46.7mm" color="#5E92C7"></sideDemo>
      </div>
      <div class="tableRight">
        <table>
          <tr style="height:21.7mm;border:1px solid #5E92C7;">
            <td style="width:36mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">每日能量需要量（kcal）</span>
              </div>
            </td>
            <td style="width:99mm;border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">营养摄入需求根据年龄、身高、体重估算出维持基本健康所需要的总能量、蛋白质以及水份的需求量。</div>
                <div class="innerBox">根据年龄、身高、体重估算出维持基本健康所需要的总能量。</div>
                <div class="innerBox boxVal">{{info.BodyValue.EstimatedEnergyNeed=="数据过时，无法计算"?info.BodyValue.EstimatedEnergyNeed:info.BodyValue.EstimatedEnergyNeed+'kcal/千卡'}}</div>
              </div>
            </td>
            <td
              rowspan="3"
              class
              style="background-color:#FFF896;width:99mm;border:1px solid #5E92C7;"
            >
              <div
                class="attention"
              >注意：如果您正患有慢性肾病、肝病、癌症、炎症性肠病、短肠综合征、慢性阻塞性肺疾病、或危重病，上述需要量可能被高估或低估，请及时咨询您的医生。</div>
            </td>
          </tr>
          <tr style="height:13mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:36mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">每日蛋白质需要量（g）</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">根据年龄、身高、体重估算出维持基本健康所需要的蛋白质摄入量。</div>
                <div class="innerBox boxVal">{{info.BodyValue.EstimatedProteinNeed=="数据过时，无法计算"?info.BodyValue.EstimatedProteinNeed:info.BodyValue.EstimatedProteinNeed+'g/克'}}</div>
              </div>
            </td>
          </tr>
          <tr style="height:12mm;border:1px solid #5E92C7;">
            <td style="width:36mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">每日水份需要量（ml）</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">根据年龄、身高、体重估算出维持基本健康所需要的水份摄入量。</div>
                <div
                  class="innerBox boxVal"
                >{{info.BodyValue.EstimatedWaterNeed=="数据过时，无法计算"?info.BodyValue.EstimatedWaterNeed:info.BodyValue.EstimatedWaterNeed+'ml'}}</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="part1">
      <div class="aside">
        <sideDemo headline="营养状况评估" height="40mm" color="#5E92C7"></sideDemo>
      </div>
      <div class="tableRight">
        <table>
          <tr style="height:2.7mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:36mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">近期体重变化（%）</span>
              </div>
            </td>
            <td style="width:191.3mm;border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">近6个月的体重变化若超过10%则具有临床意义。体重变化通常是疾病的表象之一。</div>
                <table class="nextTable">
                  <tr>
                    <td style="border:1px solid #5E92C7;">
                      <div class="innerBox noWboxVal">6个月体重变化百分率</div>
                      <div
                        class="innerBox boxVal"
                      >{{info.BodyValue.WeightChange.six_mouth_change.value}}</div>
                    </td>
                    <td>
                      <div class="innerBox noWboxVal">3个月体重变化百分率</div>
                      <div
                        class="innerBox boxVal"
                      >{{info.BodyValue.WeightChange.three_mouth_change.value}}</div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr style="height:13mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">未来6个月体重目标（kg）</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">根据目前体重和肥胖程度制定的未来6个月的体重目标。</div>
                <div class="innerBox boxVal">
                  <span
                    v-if="info.BodyValue.WeightChange.target"
                  >{{info.BodyValue.WeightChange.target}}</span>
                </div>
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
      bp: {
        backgroundColor: "",
        textStyle: {
          fontSize: 10
        },
        grid: {
          x: 30,
          y: 20,
          x2: 10,
          y2: 20
        },
        title: {
          text: "血压 单位：mmHg",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 10
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              fontSize: 10 //更改坐标轴文字大小
            }
          },
          data: ["本次", "上次", "上上一次"]
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            name: "health",
            type: "scatter",
            data: [
              this.info.BloodPressure.SBP_list[0].data / 2 +
                this.info.BloodPressure.DBP_list[0].data / 2,
              this.info.BloodPressure.SBP_list[1].data / 2 +
                this.info.BloodPressure.DBP_list[1].data / 2,
              this.info.BloodPressure.SBP_list[2].data / 2 +
                this.info.BloodPressure.DBP_list[2].data / 2
            ],
            symbolSize: 5,
            animation: false
          }
        ]
      }
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
  /* margin: 0 auto; */
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
  color: rgba(35, 37, 39, 1);
}

.isScale {
  font-size: 12px;
  width: 40mm;
  display: block;
  padding-left: 5px;
}

.over {
  width: 36mm;
  overflow: hidden;
}

.outBox {
  box-sizing: border-box;
  padding-left: 4mm;
  width: 110mm;
  overflow: hidden;
}

.outBox .innerBox {
  font-size: 14px;
  width: 113mm;
  transform: scale(0.95);
  transform-origin: 0 0;
}

.boxVal {
  font-size: 3.18mm;
  color: #5e92c7;
  font-weight: bold;
}

.noWboxVal {
  font-size: 3.18mm;
  color: #5e92c7;
  width: 50mm;
}

.attention {
  transform: scale(0.9);
  font-size: 14px;
}

.outBox .nextTable {
  width: 92.3mm;
  height: 12.5mm;
}
.nextTable .innerBox {
  width: 40mm;
  padding-left: 2mm;
}
.nextTable tr td {
  width: 46mm;
  overflow: hidden;
}

</style>
