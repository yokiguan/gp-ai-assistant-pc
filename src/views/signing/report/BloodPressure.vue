<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo1 headline="循环系统检测数值" color="#8F82BC" height="37.4mm" style="font-size:3.53mm;"></sideDemo1>
      </div>
      <div class="tableRight half">
        <table style="min-height:37.4mm">
          <tr style="height:6mm;background-color:#E6E2F3;">
            <td style="width:32mm;"></td>
            <td style="width:19mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:22mm;">{{info.BloodPressure.date_list[0]==null?'':info.BloodPressure.date_list[0]}}</td>
            <td style="width:22.5mm;">{{info.BloodPressure.date_list[1]==null?'':info.BloodPressure.date_list[1]}}</td>
            <td style="width:22mm;">{{info.BloodPressure.date_list[2]==null?'':info.BloodPressure.date_list[2]}}</td>
            <td rowspan="4" style="width:65mm;">
              <div class="mypicOut">
                <div class="mypic">我的图表</div>
                <div class="mypicContent">
                  <Chart id="bloodpressure" :data="bp" style="width:56mm;height:32mm;"></Chart>
                  <!-- <pic  name="血压" unit="mmHg" start="40" step="10"></pic> -->
                </div>
              </div>
              <div class="mypicText">
                <span>如未连续参加体检，图标的数值无法连线。由于血压容易 随状态而变化，建议您不只是在诊室测量，在家也测量。</span>
              </div>
              
            </td>
          </tr>
          <tr v-if="info.BloodPressure.SBP_list!==null">
            <td>收缩压</td>
            <td>90-140</td>
            <td>
              <template v-if="info.BloodPressure.SBP_list[0]!==null">
              <span v-if="info.BloodPressure.SBP_list[0]<90">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else-if="info.BloodPressure.SBP_list[0]>=120&&info.BloodPressure.SBP_list[0]<140">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.BloodPressure.SBP_list[0]>=140">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
              <td v-for="(item,index) in info.BloodPressure.SBP_list" :key="index">
                <span
                >{{item==null?'':item}}</span>
              </td>
          </tr>
          
          <tr v-if="info.BloodPressure.DBP_list!==null" style="background-color:#E6E2F3;">
            <td>舒张压</td>
            <td>60-90</td>
            <td>
              <template v-if="info.BloodPressure.DBP_list[0]!==null">
              <span v-if="info.BloodPressure.DBP_list[0]<60">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else-if="info.BloodPressure.DBP_list[0]>=80&&info.BloodPressure.DBP_list[0]<90">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.BloodPressure.DBP_list[0]>=90">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
                <td style="background-color:#ccc5e2;">
                  <span>{{info.BloodPressure.DBP_list[0]==null?'':info.BloodPressure.DBP_list[0]}}</span>
                </td>
                <td>
                  <span>{{info.BloodPressure.DBP_list[1]==null?'':info.BloodPressure.DBP_list[1]}}</span>
                </td>
                <td>
                  <span>{{info.BloodPressure.DBP_list[2]==null?'':info.BloodPressure.DBP_list[2]}}</span>
                </td>
          </tr>
          <tr v-if="info.BloodPressure.average_BP_list!==null" style="height:20.3mm;">
            <td>平均血压</td>
            <td>70-105</td>
            
            <td>
              <template v-if="info.BloodPressure.average_BP_list[0]!==null">
              <span v-if="info.BloodPressure.average_BP_list[0]<70">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.BloodPressure.average_BP_list[0]>=105">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
                <td v-for="(item,index) in info.BloodPressure.average_BP_list" :key="index">
                  <span
                  >{{item==null?'':item}}</span>
                </td>
          </tr>
        </table>
      </div>
      <div style="display:inline-block;">
        <warnNotitle></warnNotitle>
      </div>
    </div>
    <div class="part1">
      <div class="aside">
        <sideDemo headline="循环系统评估" color="#5E92C7" height="103mm"></sideDemo>
      </div>
      <div class="tableRight partBody">
        <table>
          <tr style="height:8mm;background-color:#E6F2FF;">
            <td style="width:27.4mm;">
              <div class="isScale">
                血压
              </div>
            </td>
            <td colspan="2">
              <div class="bloodText">
                <div>
                  血压测定用于诊断高血压病，高血压是引起脑中风和心脏病、肾脏疾病的重要原因。
                </div>
              </div>
            </td>
            <td rowspan="3">
              <div class="changePoint">
                <div class="pointTop">
                  <span>维持正常血压小贴士</span>
                </div>
                <div class="pointContent">
                  • 控制盐的摄入量（每天不超过1茶匙，约6克）;<br>
                  • 控制酱料、腌制、包装食品；<br>
                    • 多全谷物、多蔬菜水果、多低脂奶制品；<br>
                    • 定期食用鱼类、家禽、豆类和坚果；<br>
                    • 少量食用红肉、甜食以及添加糖饮料；<br>
                    • 每周至少运动（中强度）150分钟；<br>
                    • 尽量戒烟
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="isScale">
                收缩压/舒张压
              </div>
            </td>
            <td colspan="2">
              <div>
                <BloodLevel></BloodLevel>
                <!-- <img style="height:50mm;width:100mm" src='../../../assets/blood.jpg'/> -->
                <!-- <div class="bloodUnit">
                  <span>单位：mmHg</span>
                </div>
                <div class="blood3">

                  <div class="bloodLevel" style="top:2mm;">3级高血压</div>
                  <div class="blood2">
                    <div class="bloodLevel">2级高血压</div>
                    <div class="blood1">
                      <div class="bloodLevel">1级高血压</div>
                      <div class="bloodH">
                        <div class="bloodLevel">高正常血压</div>
                        <div class="bloodN">
                          <ul class="yLi liStyle">
                            • 180</li>
                            • 160</li>
                            • 140</li>
                            • 130</li>
                          </ul>
                          <ul class="xLi liStyle">
                            • 80</li>
                            • 90</li>
                            • 100</li>
                            • 110</li>
                          </ul>
                          <div class="bloodLevel">正常高血压</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="bloodText">
                  如未连续参加体检，图表的数值无法连线。 由于血压容易随状态而变化，建议您不只是在诊察室测量，在家也要测量。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:15.6mm;background-color:#E6F2FF;">
            <td>
              <div class="isScale">
                高血压风险评价
              </div>
            </td>
            <td>
              <div class="eat">
                <div>{{info.BloodPressure.hypertension_risk.value}}</div>
              </div>
            </td>
            <td>
              <div class="eatBlood">
                <div>血压 {{info.BloodPressure.hypertension_risk.SBP}}/{{info.BloodPressure.hypertension_risk.DBP}}</div>
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
import BloodLevel from '../components/bloodlevel'
export default {
  data() {
    return {
      name: this.info.PersonInfo.name,
      date: "",
      bp: {
        backgroundColor: "",
        textStyle: {
          fontSize: 8
        },
        grid: {
          x: 28,
          y: 20,
          x2: 18,
          y2: 20
        },
        title: {
          text: "血压 单位：mmHg",
          y: "top",
          x: "right",
          textStyle: {
            fontSize: 8
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
          data: this.deepReverse(this.info.BloodPressure.date_list)
        },
        yAxis: {
          type: "value",
          scale: true
        },
        series: [
          {
            type: "line",
            data: this.deepReverse(this.info.BloodPressure.SBP_list),
            symbolSize: 5,
            animation: false
          },{
            type: "line",
            data: this.deepReverse(this.info.BloodPressure.DBP_list),
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
    Chart,
    BloodLevel
  },
  props: ["info"],
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
  }
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
  margin:0 auto;
  word-break: break-all;
  /* margin-top:-150mm; */
  vertical-align: middle;
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
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(35, 37, 39, 1);
}

.head-text {
  font-size: 5.29mm;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

.orange {
  color: #ff7e00;
}

.part1 {
  margin-top: 3mm;
}
 

.isScale {
  font-size: 12px;
  width: 40mm;
  display: block;
  /* padding-left: 5px; */
}

.over {
  width: 36mm;
  overflow: hidden;
}

.outBox {
  box-sizing: border-box;
  padding-left: 4mm;
  width: 99mm;
  overflow: hidden;
}

.outBox .innerBox {
  width: 100mm;
  font-size: 3.18mm;
  transform: scale(0.9);
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

.partBody {
    vertical-align: top;
    display: inline-block;
  }

  .partBody table {
    border-collapse: collapse;
    height: 103mm;
    border: 1px solid #5E92C7;
  }

  .partBody table tr td {
    border: 1px solid #5E92C7;
  }

  .partBody table tr td:first-child div {
    box-sizing: border-box;
    font-size: 14px;
    transform: scale(0.9);
    width: 28mm;
  }


  .bloodText {
    width: 103mm;
    /* overflow: hidden; */
    line-height: 20px;
    margin-top: 2mm;
    font-size: 12px;
  }

  .eat {
    width: 64mm;
    word-wrap:break-word;
    word-break: break-all;
    font-size: 12px;
  }

  .eat div {
    width: 79mm;
    /* transform: scale(0.9); */
    
  }

  .eatBlood div {
    /* transform: scale(0.9); */
    font-size: 12px;
     word-wrap:break-word;
    word-break: break-all;
  }

  .changePoint {
    height: 103mm;
  }

  .changePoint .pointTop {
    height: 8mm;
    background-color: #556FB5;
    text-align: center;

  }

  .changePoint .pointTop span {
    display: block;
    color: #fff;
    font-size: 3.5mm;
    line-height: 8mm;
    transform: scale(0.9);
  }

  .changePoint .pointContent {
    transform: scale(0.9);
    font-size: 3.8mm;
    line-height: 5mm;
  }

.hr {
  width: 201mm;
  height: 2px;
  background: #5e92c7;
  margin-top: 2mm;
}
.half table {
  height: 34mm;
  border-collapse: collapse;
  box-sizing: border-box;
  font-size: 3.18mm;
}
.half table tr {
  height: 6mm;
}
.half table tr td {
  border: 1px solid #8f82bc;
  text-align: center;
}
.pointOut {
  width: 47mm;
  height: 36mm;
}
.point {
  width: 48mm;
  height: 6mm;
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 3.18mm;
  background-color: #556fb5;
}
.pointBody {
  text-align: center;
  line-height: 106px;
  font-size: 2.82mm;
}
.mypicOut {
  padding-top: 1mm;
  width:65mm;
}
.mypicOut .mypic {
  box-sizing: border-box;
  vertical-align: top;
  color: #fff;
  line-height: 16px;
  display: inline-block;
  padding-top: 17px;
  width: 6mm;
  height: 35mm;
  background-color: #e4007f;
}
.mypicContent {
  box-sizing: border-box;
  display: inline-block;
  padding-left: 2mm;
  font-size: 2.12mm;
  width: 58mm;
  height: 35mm;
  background-color: #fff;
  margin-left: -1mm;
}
.mypicText {
  color: #ae5da1;
  width: 65mm;
  overflow: hidden;
}
.mypicText span {
  display: block;
  width: 80mm;
  transform: scale(0.8);
  transform-origin: 0 0;
}
</style>

.note-title{
  color: white;
  word-wrap: break-word;
  word-break:normal;
  background-color:rgba(94, 146, 199, 1);
  margin-bottom: 0.5rem;
}
.note{
  word-wrap: break-word;
  word-break: break-all;
  font-size: 0.6rem;
}
.mypic{
    margin-top: 0.5rem;
    display: table;
    .mypic-title{
        display: table-cell;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 0.6rem;
        width: 0.6rem;
        line-height: 0.6rem;
        padding-left:0.1rem; 
        vertical-align: middle;
        color:white;
        background-color:rgba(94, 146, 199, 1);
    }
    .mypic-content{
        display: table-cell;
    }
}
.his-item{
  width: 10vw;
}
.explain{
  text-align: left;
  font-size:0.67rem;
}
</style>