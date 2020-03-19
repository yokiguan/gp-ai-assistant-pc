<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo1 color="#8F82BC" height="30.6mm" headline="电解质检测数值"></sideDemo1>
      </div>
      <div class="tableRight every half">
        <table style="min-height:30.6mm;">
          <tr style="height:6.1mm;background-color:#E6E2F3;">
            <td style="width:40mm;"></td>
            <td style="width:36mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;background-color:#CCC5E2;">{{info.Electrolyte.date_list[0]==null?'':info.Electrolyte.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Electrolyte.date_list[1]==null?'':info.Electrolyte.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Electrolyte.date_list[2]==null?'':info.Electrolyte.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Electrolyte.K!==null">
            <td>
              <div>K</div>
            </td>
            <td>3.5-5.3mmol/L</td>
            <td>
              <template v-if="info.Electrolyte.K[0].length!==null">
                <span v-if="info.Electrolyte.K[0]<3.5">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
                </span>
                <span v-else-if="info.Electrolyte.K[0]>5.3">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Electrolyte.K" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
          <tr v-if="info.Electrolyte.Na!==null" style="background-color:#E6E2F3;">
            <td>
              <div>Na</div>
            </td>
            <td>137-147mmol/L</td>
            <td>
              <template v-if="info.Electrolyte.Na[0]!==null">
                <span v-if="info.Electrolyte.Na[0]<137">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
                </span>
                <span v-else-if="info.Electrolyte.Na[0]>147">
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
                </span>
                <span v-else>
                  <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
                </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">{{info.Electrolyte.Na[0]==null?'':info.Electrolyte.Na[0]}}</td>
            <td>{{info.Electrolyte.Na[1]==null?'':info.Electrolyte.Na[1]}}</td>
            <td>{{info.Electrolyte.Na[2]==null?'':info.Electrolyte.Na[2]}}</td>
          </tr>
          <tr>
            <td>
              <div>Cl</div>
            </td>
            <td>96-108mmol/L</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div style="display:inline-block;vertical-align: top;">
        <warnNotitle></warnNotitle>
      </div>
    </div>
    <div class="part1">
      <div class="aside" style="vertical-align: top;">
        <sideDemo color="#5E92C7" height="35mm" headline="电解质评估"></sideDemo>
      </div>
      <div class="tableRight every">
        <table style="height:35mm;">
          <tr style="height:12mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:30mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">K</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  <span>是维持神经肌肉，正常工作的电解质，当服用利尿剂或继发性高血压等病时数值低下：肾功能不全等则上升。</span>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:12mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">Na</span>
              </div>
            </td>
            <td>
              <div class="outBox">
                <div class="innerBox">
                  <span>是保持身体水分和渗透压正常的必要电解质（正离子）。肾病综合征与充血性心力衰竭时数值低下：脱水，尿崩等症时数值会上升。</span>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">Cl</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  <span>是和钠一起保持水分和调整渗透压的必要电解质（负离子）。呕吐或患有阿狄森病时数值低下：而肾功能不全，盐分过量摄取时数值则上升。</span>
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
    sideDemo
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
