<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo headline="血脂检测数值" color="rgba(143,130,188,1)" height="77.7mm"></sideDemo>
      </div>
      <div class="tableRight">
        <table style="min-height:77.7mm">
          <tr style="height:5.6mm;background-color:#E6E2F3;">
            <td style="width:40mm;border:1px solid #8F82BC;"></td>
            <td style="width:35mm;text-align:center;border:1px solid #8F82BC;">参考范围</td>
            <td style="width:7.5mm;text-align:center;border:1px solid #8F82BC;"></td>
            <td
              style="width:32.5mm;text-align:center;border:1px solid #8F82BC;background-color:#CCC5E2;"
            >{{info.BloodLipid.date_list[0]}}</td>
            <td style="width:32mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodLipid.date_list[1]}}</td>
            <td style="width:31mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodLipid.date_list[2]}}</td>
          </tr>
          
          <tr v-if="info.BloodLipid.TC_list!==null" style="height:5.6mm;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;总胆固醇</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-5.18mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.TC_list[0].length!=0">
                <span v-if="info.BloodLipid.TC_list[0]>5.18">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;" v-for="(item,index) in info.BloodLipid.TC_list" :key="index">
              <span
              >{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodLipid.TG_list!==null" style="height:5.6mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;甘油三酯</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-1.7mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.TG_list[0].length!=0">
                <span v-if="info.BloodLipid.TG_list[0]>1.7">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodLipid.TG_list[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.TG_list[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.TG_list[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodLipid.HDL_list!==null" style="height:11mm;">
            <td style="border:1px solid #8F82BC;padding-left:3mm;">
              高密度
              <br />脂蛋白胆固醇
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">＞1.04mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.HDL_list[0].length!=0">
                <span v-if="info.BloodLipid.HDL_list[0]<1.04">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;" v-for="(item,index) in info.BloodLipid.HDL_list" :key="index">
              <span
              >{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodLipid.LDL_list!==null" style="height:11mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;text-align:left;padding-left:3mm;">
              低密度
              <br />脂蛋白胆固醇
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">0-3.37mmol/L</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodLipid.LDL_list[0].length!=0">
                <span v-if="info.BloodLipid.LDL_list[0]>3.37">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodLipid.LDL_list[2]}}</span>
            </td>
          </tr>
          <tr style="border:2px solid #E4007F;">
            <td colspan="6" style="border:1px solid #8F82BC;position:relative;">
              <div class="myPic">
                <div class="aside">
                  <span class="asideName">您的图表</span>
                </div>
              </div>
              <div class="myPicContent">
                <div class="pic">
                  <Chart id="high_cholesterol" :data="hct" style="width:47mm;height:32mm;"></Chart>
                </div>
                <div class="pic">
                  <Chart id="low_cholesterol" :data="lct" style="width:47mm;height:32mm;"></Chart>
                </div>
                <div class="pic">
                  <Chart id="triglyceride" :data="triglyceride" style="width:47mm;height:32mm;"></Chart>
                </div>
                <div class="ps">如未连续参加体检，图标的数值无法连线。</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="warn">
        <warn></warn>
      </div>
    </div>
    <div class="part1">
      <div class="aside" style="vertical-align: top;">
        <sideDemo color="#5E92C7" height="52.8mm" headline="血脂评估"></sideDemo>
      </div>
      <div class="tableRight">
        <table>
          <tr style="height:10mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:30mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">总胆固醇</span>
              </div>
            </td>
            <td colspan="2" rowspan="2" style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  若偏高，是导致动脉硬化与脑梗塞的原因。
                  <br />总胆固醇能强化与维持血管，甘油三酯是体内能量之源，所以适当的数值范围内的总胆固醇和甘油三酯是人体不可缺少的成分。
                </div>
              </div>
            </td>
            <td rowspan="5" class style="border:1px solid #5E92C7;overflow: hidden;">
              <div class="pointOut">
                <div class="point">维持血脂正常小贴士</div>
                <div class="pointBody">
                  • 维持健康体重，控制腰围在正常范围内；
                  <br>
                    • 控制动物脂肪的摄入，避免皮脂、肥肉、猪油、牛油等；
                   <br> • 适量食用植物油或者不饱和脂肪高的食物，比如深海鱼、坚果、牛油果；
                    <br>• 限制饮酒，尽量做到戒酒
                    <br>• 多高纤维食物，如全谷物和蔬菜水果
                    <br>• 每周至少运动（中强度）150分钟
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:10mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">甘油三酯</span>
              </div>
            </td>
          </tr>
          <tr style="height:13mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  高密度
                  <br />脂蛋白胆固醇
                </span>
              </div>
            </td>
            <td colspan="2" style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  除去附着于血管的胆固醇，预防动脉硬化。
                  <br />被称作[有益的胆固醇]，会因缺血性心脏病，脑梗塞，糖尿病，吸烟，肥胖等，减少。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:10mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  低密度
                  <br />脂蛋白胆固醇
                </span>
              </div>
            </td>
            <td colspan="2" style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">被称为[有害的胆固醇]、可致动脉硬化。</div>
              </div>
            </td>
          </tr>
          <tr style="height:10mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  高血脂风险评价
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox" style="width:70mm;">
                <div class="innerBox">{{info.BloodLipid.BloodLipid_risk.value}}</div>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox" style="width:45mm;">
                <div class="innerBox" style="width:45mm;">
                  {{info.BloodLipid.BloodLipid_risk.data}}
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
import sideDemo from "./common/sideDemo";
import sideDemo1 from "./common/sideDemo1";
import warn from "./common/warnNotitle";
import Chart from "../components/chart";
export default {
  data() {
    return {
      name: this.info.PersonInfo.name,
      date: "",
      hct: {
        backgroundColor: "",
        textStyle: {
          fontSize: 10
        },
        grid: {
          x: 25,
          y: 20,
          x2: 10,
          y2: 20
        },
        title: {
          text: "高密度脂蛋白胆固醇 单位：mmol/L",
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
              fontSize: 8 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            name: "health",
            type: "line",
            // data:[0,0,0],
            data: this.deepReverse(this.info.BloodLipid.HDL_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      lct: {
        backgroundColor: "",
        textStyle: {
          fontSize: 10
        },
        grid: {
          x: 39,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "低密度脂蛋白胆固醇 单位：mmol/L",
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
              fontSize: 8 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            name: "health",
            type: "line",
            // data:[0,0,0],
            data: this.deepReverse(this.info.BloodLipid.LDL_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      triglyceride: {
        backgroundColor: "",
        textStyle: {
          fontSize: 10
        },
        grid: {
          x: 30,
          y: 20,
          x2: 0,
          y2: 20
        },
        title: {
          text: "甘油三酯 单位：mmol/L",
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
              fontSize: 8 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BloodLipid.date_list)
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            name: "health",
            type: "line",
            // data:[0,0,0],
            data:this.deepReverse(this.info.BloodLipid.TG_list),
            symbolSize: 5,
            animation: false
          }
        ]
      }
    };
  },
  components: {
    sideDemo,
    warn,
    sideDemo1,
    Chart
  },
  methods: {
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
    },
    deepReverse(list){
      if(list==null)
      return []
      return JSON.parse(JSON.stringify(list)).reverse()
    }
  },
  props: ["info"]
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
  /* margin-top:-300mm; */
  padding: 0;
  word-break: break-all;
  vertical-align: middle;
  margin: 0 auto;
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

.head-text {
  font-size: 5.29mm;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
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

.eat {
  width: 64mm;
  /* overflow: hidden; */
}

.eat div {
  width: 79mm;
  transform: scale(0.9);
  font-size: 3.4mm;
}

.eatBlood div {
  transform: scale(0.9);
  font-size: 3.5mm;
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

.myPic {
  display: inline-block;
  background-color: #e4007f;
  width: 6mm;
}

.myPic .aside {
  display: inline-block;
  width: 6mm;
  height: 48mm;
  text-align: center;
}

.warn {
  width: 28px;
  display: inline-block;
  margin-left: 1.2mm;
  /* margin-top: 4px; */
  text-align: center;
}

.asideName {
  display: block;
  font-family: Microsoft YaHei;
  /* font-weight: 400; */
  color: rgba(255, 255, 255, 1);
  font-size: 3.18mm;
  line-height: 13px;
  margin-top: 12.7mm;
}

.myPicContent {
  display: inline-block;
  vertical-align: top;
  /* position: relative; */
}

.myPicContent .pic{
  display: inline-block;
  margin-top: 4mm;
  margin-left: 3mm;
}

.ps {
  font-size: 2.12mm;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(174, 93, 161, 1);
  line-height: 16px;
  position: absolute;
  transform: scale(0.8);
  margin-top: 8px;
  bottom: 0mm;
  right: -4mm;
}

.over {
  width: 30mm;
  overflow: hidden;
}

.isScale {
  font-size: 14px;
  /* width: 30mm; */
  display: block;
  padding-left: 10px;
  transform: scale(0.9);
  transform-origin: 0 0;
}

.outBox {
  box-sizing: border-box;
  padding-left: 3mm;
  /* width: 110mm; */
  /* overflow: hidden; */
  word-wrap: break-word;
  word-break: break-all;
}

.outBox .innerBox {
  word-wrap: break-word;
  word-break: break-all;
  font-size: 12px;
}

.pointOut {
  width: 100%;
  vertical-align: top;
  float: top;
}

.point {
  /* height: 6mm; */
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 3.4mm;
  background-color: #556fb5;
}

.pointBody {
  padding-top: 0px;
  text-align: left;
  line-height: 18px;
  font-size: 13px;
  transform: scale(0.95);
}
</style>
