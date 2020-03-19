<template>
  <div class="module-conatiner">
    <div class="part1">
      <div class="aside sgn">
        <sideDemo1 color="#8F82BC" height="30mm" headline="肾功能检测数值"></sideDemo1>
      </div>
      <div class="tableRight every half">
        <table style="min-height:30mm">
          <tr style="height:5.9mm;background-color:#E6E2F3;">
            <td style="width:35mm;"></td>
            <td style="width:44mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;background-color:#CCC5E2;">{{info.Kidney.date_list[0]==null?'':info.Kidney.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Kidney.date_list[1]==null?'':info.Kidney.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Kidney.date_list[2]==null?'':info.Kidney.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Kidney.BUN!==null">
            <td>
              <div>BUN（尿素）</div>
            </td>
            <td>1.8-7.1 mmol/L</td>
            <td>
               <template v-if="info.Kidney.BUN[0]!=null">
              <span v-if="info.Kidney.BUN[0]<1.8">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.Kidney.BUN[0]>7.1">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Kidney.BUN" :key="index">
                <span
                >{{item==null?'':item}}</span>
              </td>
          </tr>
          <tr v-if="info.Kidney.CRE!==null" style="background-color:#E6E2F3;">
            <td>
              <div>CRE（肌酐）</div>
            </td>
            <td>男 44-132,女 70-106 μmol/L</td>
            <td>
             <template v-if="info.Kidney.CRE[0]!==null">
              <span v-if="(info.Kidney.CRE[0]<44&&info.PersonInfo.gender=='男')||(info.Kidney.CRE[0]<70&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="(info.Kidney.CRE[0]>132&&info.PersonInfo.gender=='男')||(info.Kidney.CRE[0]>106&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Kidney.CRE[0]==null?'':info.Kidney.CRE[0]}}</span>
            </td>
            <td>
              <span>{{info.Kidney.CRE[1]==null?'':info.Kidney.CRE[1]}}</span>
            </td>
            <td>
              <span>{{info.Kidney.CRE[2]==null?'':info.Kidney.CRE[2]}}</span>
            </td>
          </tr>
          <tr>
            <td style="height:9.5mm;">
              <div>eGFR<br>（预测肾小球滤过率）</div>
            </td>
            <td>
              80 -120 ml/(min x 1.73m
              <sup>2</sup>)
            </td>
            <td>
              
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div style="display:inline-block;vertical-align:top;height:27mm;">
        <warnNotitle></warnNotitle>
      </div>
    </div>
    <div class="part1">
      <div class="aside" style="vertical-align: top;">
        <sideDemo color="#5E92C7" height="35mm" headline="肾功能评估"></sideDemo>
      </div>
      <div class="tableRight every">
        <table style="height:35mm;">
          <tr style="height:12mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:30mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  BUN(血尿素氮)
                  <br />CRE(肌酐)
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  <span>是人体蛋白质代谢的终末产物，大部分从尿液中排出。肾脏的排出机能低下时，在血中的浓度会变高。肾疾患或尿路闭塞时显示高值。</span>
                </div>
              </div>
            </td>
            <td rowspan="1" class style="border:1px solid #5E92C7;overflow: hidden;">
              <div class="pointOut">
                <div class="point">维持肾功能正常小贴士</div>
                <div class="pointBody" style="height:10mm;">
                    • 避免暴饮暴食、精神紧张、过劳、睡眠不足；<br>
                    • 控制盐的摄入量<br>
                    • 避免憋尿<br>
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
import sideDemo1 from "./common/sideDemo2";
import sideDemo from "./common/sideDemo";
import warnNotitle from "./common/warnNotitle";
export default {
  data() {
    return {
      name: this.info.PersonInfo.name,
      date: ""
    };
  },
  components: {
    sideDemo1,
    warnNotitle,
    sideDemo,
  },
  props: ["info"],
  methods: {
    getDataList(objlist) {
      let list = objlist.map(function(item) {
        return item.data;
      });
      return list;
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
  text-align: center;
  font-size: 3.18mm;
  /* padding-left: 10px; */
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
.pointOut {
  height: 40mm;
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
</style>
