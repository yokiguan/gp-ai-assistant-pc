<template>
  <div v-if="info.BodyValue!==null" class="page-container">
    <div class="part1">
      <div class="aside">
        <sideDemo headline="身体检测数值" color="rgba(143,130,188,1)" height="71mm"></sideDemo>
      </div>

      <div class="tableRight">
        <table style="min-height:71mm">
          <tr style="height:5.6mm;background-color:#E6E2F3;">
            <td style="width:40mm;border:1px solid #8F82BC;"></td>
            <td style="width:35mm;text-align:center;border:1px solid #8F82BC;">参考范围</td>
            <td style="width:7.5mm;text-align:center;border:1px solid #8F82BC;"></td>
            <td
              style="width:32.5mm;text-align:center;border:1px solid #8F82BC;background-color:#CCC5E2;"
            >{{info.BodyValue.date_list[0]}}</td>
            <td style="width:32mm;text-align:center;border:1px solid #8F82BC;">{{info.BodyValue.date_list[1]}}</td>
            <td style="width:31mm;text-align:center;border:1px solid #8F82BC;">{{info.BodyValue.date_list[2]}}</td>
          </tr>
          <tr v-if="info.BodyValue.height_list!==null" style="height:5.6mm;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;身高（cm）</td>
            <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
            </td>
            <td v-for="(item,index) in info.BodyValue.height_list" :key="index" style="border:1px solid #8F82BC;text-align:center;">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.BodyValue.weight_list!==null" style="height:5.6mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;体重（kg）</td>
            <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BodyValue.weight_list[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BodyValue.weight_list[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BodyValue.weight_list[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BodyValue.BMI_list!==null" style="height:5.6mm;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;BMI</td>
            <td style="border:1px solid #8F82BC;text-align:center;">18.5~23.9</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BodyValue.BMI_list[0].length!=0">
              <span v-if="info.BodyValue.BMI_list[0].data<18.5">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.BodyValue.BMI_list[0].data>23.9">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.BodyValue.BMI_list" :key="index" style="border:1px solid #8F82BC;text-align:center;">
              <span>{{item}}</span>
            </td>
          </tr>
          <tr v-if="info.BodyValue.waist_list!==null" style="height:5.6mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;">&nbsp;&nbsp;&nbsp;腹围</td>
            <td style="border:1px solid #8F82BC;text-align:center;">N/A</td>
            <td style="border:1px solid #8F82BC;text-align:center;"></td>
            <td v-for="(item,index) in info.BodyValue.waist_list" :key="index" style="border:1px solid #8F82BC;text-align:center;">
              <span
              >{{item}}</span>
            </td>
          </tr>
          <tr style="border:2px solid #E4007F;">
            <td colspan="6" style="border:1px solid #8F82BC;position:relative;">
              <div class="myPic">
                <div class="aside">
                  <span class="asideName">您的图表</span>
                </div>
                <div class="myPicContent">
                  <div class="myPics">
                    <div class="pic">
                      <Chart id="weight" :data="weight" style="width:200px;height:164px;"></Chart>
                    </div>
                    <div class="pic">
                      <Chart id="BMI" :data="BMI" style="width:200px;height:164px;;"></Chart>
                    </div>
                    <div class="pic">
                      <Chart id="belly" :data="belly" style="width:200px;height:164px;"></Chart>
                    </div>
                  </div>
                  <div class="ps">如未连续参加体检，图标的数值无法连线。</div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="warn">
        <warn></warn>
      </div>
    </div>
    <div class="part1" v-if="info.BodyValue!==null">
      <div class="body-content">
        <div class="aside">
          <sideDemo headline="身体检测评估" color="rgba(94,146,199,1)" height="95.8mm"></sideDemo>
        </div>
        <div class="tableRight">
          <table>
            <tr style="background-color:rgba(165, 204, 247, 1);">
              <td>类别</td>
              <td colspan="2">解释</td>
            </tr>
            <tr style="height:14.9mm;background-color:#E6F2FF;">
              <td style="min-width:25mm;border:1px solid rgba(94,146,199,1);">
                <span class="td1">理想体重</span>
              </td>
              <td style="border:1px solid rgba(94,146,199,1);padding-right:0px;">
                <div style="margin-left:5px;">
                  <span style="font-size:14px;display:block;font-weight:500;">自己的体重和标准体重做对比来判定肥胖程度</span>
                  <span style="font-size:12px;">若是肥胖,向全身运输血液的量就会增加、心脏和血管壁的负担会增加,</span>
                  <span style="font-size:16px;color:#FF9306;font-weight:900;">
                    <br />容易引起心肥大等
                    心脏疾病和高血压等生活习惯病
                  </span>
                </div>
              </td>
              <td
                style="font-size:14px;line-height:28px;border:1px solid rgba(94,146,199,1);"
                rowspan="4"
              >
              <div class="pointOut">
                <div class="point">保持理想体重小贴士</div>
               <div class="pointBody"> • 维持健康的饮食习惯；
                <br />• 多高纤维食物，如全谷物和蔬菜水果；
                <br />•
                选择低脂的优质蛋白
                <br />• 控制每餐的份量
                <br />• 持之以恒的运动</div>
                </div>
              </td>
            </tr>
            <tr style="height:33mm;">
              <td style="border:1px solid rgba(94,146,199,1);">
                <span class="td1">理想体重范围</span>
              </td>
              <td style="border:1px solid rgba(94,146,199,1);">
                <div class="weight">
                  <div class="weightText">当前的体重和理想体重做对比来判定肥胖程度。</div>
                  <div class="weightRange">
                    <i class="greenicon"></i>
                    <span>理想体重范围</span>
                  </div>
                  <div class="rangeValue">
                    <span v-if="isString(info.BodyValue.WeightRange)">{{info.BodyValue.WeightRange}}</span>
                    <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info.BodyValue.WeightRange[0]}}-{{info.BodyValue.WeightRange[1]}}kg</span>
                  </div>
                  <div class="weightPic"></div>
                </div>
              </td>
            </tr>
            <tr style="height:18.6mm;">
              <td style="border:1px solid rgba(94,146,199,1);">
                <span class="td1">BMI</span>
              </td>
              <td style="border:1px solid rgba(94,146,199,1);">
                <div class="bmi">
                  <span class="top">
                    肥胖程度的表示指数<br>
                    <span
                      style="margin-left:10px;font-size:22px;color:rgba(94,146,199,1);border:1px solid rgba(94,146,199,1)"
                    >BMI</span>=体重(kg)÷身高
                    <sup>2</sup>(m
                    <sup>2</sup>)
                  </span>
                  <span style="font-size:14px">
                    <br />BMI在
                    <span
                      style="font-size:14px;color:#FF9306;font-weight:900;"
                    >22前后的人最不容易得病而且死亡率也是最低的</span>
                  </span>
                </div>
              </td>
            </tr>
            <tr style="height:17.6mm;background-color:#E6F2FF;">
              <td style="border:1px solid rgba(94,146,199,1);">
                <span class="td1">腹围</span>
              </td>
              <td style="border:1px solid rgba(94,146,199,1);">
                <span class="top" style="font-size:14px;font-weight:bold;">腹围是判断内脏脂肪的程度、代谢综合征判定的基准之一</span>
                <br />
                <span class="bottom">
                  腹围虽然在标准值以下、但是内脏脂肪面积在100cm
                  <sup>2</sup>以上者，想知道正确的状态，要通过腹部CT扫描来测定
                  <br />建议每年做一次体检，正确把握自己的健康状态是十分重要的
                </span>
                <div class="topTableDiv">
                <div class="num2">
                  <span class="leftDiv">必须项</span>
                  <span class="leftText">
                    <div class="leftcontent">
                      <div>腹围</div>
                      <span class="orange">男性85.0cm~女性90.0~</span>
                      <span>内脏脂肪的面积</span>
                      <div>无论男女100cm²以上</div>
                    </div>
                  </span>
                </div>
                <div class="num2 lnum">
                  <span class="leftDiv">选择项</span>
                  <span class="leftText">
                    <div class="leftcontent">
                          <span class="orange">甘油三酯超过150mg/dl</span>
                          <span>，以上/并且/或者高密度脂蛋白胆固醇</span>
                          <span class="orange">40mg/dL未满</span>
                        收缩期（最高）血压超过
                        <span class="orange">130mmHg以上</span>
                        <span>/并且/或者</span>
                      
                        扩张期（最低）血压超过
                        <span class="orange">85mmHg以上</span>
                      
                      
                          空腹时血糖超过
                          <span class="orange">110mg/dL以上</span>
                          <span>/并且/或者</span>
                          <span class="orange">HbA1c6.0%以上</span>（NGSP）
                        
                    </div>
                  </span>
                </div>
              </div>
              <div class="bottom">
              脂质异常症（高血脂症）、高血压、糖尿病接受药物治疗时，也请包括在以上的项目内。
              </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import sideDemo from "./common/sideDemo";
import warn from "./common/warn";
import Chart from "../components/chart";
import domtoImage from 'dom-to-image'
export default {
  data() {
    return {
      name: this.info.PersonInfo.name,
      date: "",
      blank: " ",
      weight: {
        backgroundColor: "",
        textStyle: {
          fontSize: 10
        },
        grid: {
          x: 28,
          y: 30,
          x2: 10,
          y2: 40
        },
        title: {
          text: "体重 单位：kg",
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
              fontSize: 9 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            name: "health",
            type: "line",
            data: this.deepReverse(this.info.BodyValue.weight_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      BMI: {
        backgroundColor: "",
        grid: {
          x: 29,
          y: 30,
          x2: 10,
          y2: 40
        },
        textStyle: {
          fontSize: 8
        },
        title: {
          text: "BMI 单位：m/(kg2)",
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
              fontSize: 9 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          data: ["10%", "10%", "10%"]
        },
        series: [
          {
            name: "health",
            type: "line",
            data: this.deepReverse(this.info.BodyValue.BMI_list),
            symbolSize: 5,
            animation: false
          }
        ]
      },
      belly: {
        backgroundColor: "",
        grid: {
          x: 28,
          y: 30,
          x2: 10,
          y2: 40
        },
        textStyle: {
          fontSize: 8
        },
        title: {
          text: "腹围 单位：cm",
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
              fontSize: 9 //更改坐标轴文字大小
            }
          },
          data: this.deepReverse(this.info.BodyValue.date_list)
        },
        yAxis: {
          type: "value",
          scale: true,
          data: ["10%", "10%", "10%"]
        },
        series: [
          {
            name: "health",
            type: "line",
            data: this.deepReverse(this.info.BodyValue.waist_list),
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
    Chart
  },
  props: ["info"],
  methods:{
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
    },
    deepReverse(list){
      if(list==null)
      return new Array()
      else
      return JSON.parse(JSON.stringify(list)).reverse()
    },
    isString(str){
      return (typeof str=='string')&&str.constructor==String; 
    }
  }
};
</script>

<style scoped>
.page-container {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  /* height: 330mm; */
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

.allP {
  display: inline-block;
  height: 57mm;
  background: rgba(215, 242, 227, 1);
  border: 1px solid rgba(110, 174, 139, 1);
  vertical-align: top;
}

.line {
  width: 200.7mm;
  height: 2px;
  background: rgba(94, 146, 199, 1);
  margin-top: 4.5mm;
  margin-left: 7.8mm;
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
.topTableDiv {
  font-size:14px;
  display: flex;
  flex-direction: row;
}
.pointOut {
  height: 130mm;
}

.point {
  height: 6mm;
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 3.4mm;
  background-color: #556fb5;
}

.pointBody {
  margin-top:5px;
  text-align: left;
  line-height: 25px;
  font-size: 12px;
}
.num2 {
  margin-top: 2mm;
  display: flex;
  flex-direction: row;
}
.lnum{
  max-width:110mm;
}
.leftDiv {
  width: 15px;
  /* display: inline-block; */
  background-color: #5e92c7;
  color: #fff;
  text-align: center;
  line-height: 15px;
  vertical-align: top;
}

.leftText {
  /* display: inline-block; */
  background-color: #fff;
}

.leftText .leftcontent {
  max-width:100mm;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 12px;
  vertical-align: middle;
}

.orange {
  color: #ff7e00;
}

.myPic {
  display: flex;
  flex-direction: row;

}

.myPic .aside {
  text-align: center;
  width: 3.2mm;
  height: 164px;
}

.asideName {
  font-family: Microsoft YaHei;
  color: rgba(255, 255, 255, 1);
  background-color: #e4007f;
  font-size: 3.18mm;
  height: 100%;
  writing-mode: vertical-lr;
}
.myPicContent {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.myPics {
  display: flex;
  flex-direction: row;
  vertical-align: top;
  margin-left: 5mm;
  /* position: relative; */
}

.myPics .pic {
  width:200px;
  margin-right: 5mm;
  margin-top: 1mm;
  height: 36mm;
}

.ps {
  width: 100%;
  text-align: end;
  font-size: 2.12mm;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(174, 93, 161, 1);
  line-height: 18px;
  transform: scale(0.8);
  margin-top: 1mm;
  bottom: 0mm;
}

.aside .quan {
  display: inline-block;
  width: 7.3mm;
  height: 5.4mm;
  background: rgba(94, 146, 199, 1);
  border-radius: 16px;
}


.body-content {
  margin-top: 2px;
}

.warn {
  width: 28px;
  display: inline-block;
  margin-left: 1.2mm;
  /* margin-top: 4px; */
  text-align: center;
}

.weight {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(35, 37, 39, 1);
  line-height: 20px;
  margin-left: 5px;
}

.weight .weightRange .greenicon {
  display: inline-block;
  margin-left: 3px;
  width: 17px;
  height: 17px;
  background: rgba(194, 237, 178, 1);
  vertical-align: sub;
}

.weight .weightRange span {
  margin-left: 11px;
  color: #80c269;
  font-size: 17px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 29px;
}

.weight .rangeValue {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(128, 194, 105, 1);
  line-height: 32px;
}

.fat {
  margin-left: 5px;
}

.fat .top {
  color: #5e92c7;
  font-size: 16px;
}

.bottom {
  font-size: 12px;
  color: #232527;
}
.top {
  font-size: 16px;
  font-weight: bold;
}
</style>
