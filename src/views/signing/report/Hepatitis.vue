<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo1 color="#8F82BC" height="32mm" headline="肝炎检测数值"></sideDemo1>
      </div>
      <div class="tableRight half">
        <table style="min-height:32mm">
          <tr style="height:6.3mm;background-color:#E6E2F3;">
            <td style="width:40mm;"></td>
            <td style="width:36mm;">参考范围
            </td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;background-color:#CCC5E2;">{{info.Hepatitis.date_list[0]==null?'':info.Hepatitis.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Hepatitis.date_list[1]==null?'':info.Hepatitis.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Hepatitis.date_list[2]==null?'':info.Hepatitis.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Hepatitis.hbs_ag!==null">
            <td>
              <div>HBs抗原</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
              <td v-for="(item,index) in info.Hepatitis.hbs_ag" :key="index">
                <span
                >{{item==null?'':item}}</span>
              </td>
          </tr>
          <tr v-if="info.Hepatitis.hbs_ab!==null" style="background-color:#E6E2F3;">
            <td>
              <div>HBs抗体</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Hepatitis.hbs_ab[0]==null?'':info.Hepatitis.hbs_ab[0]}}</span>
            </td>
            <td>
              <span>{{info.Hepatitis.hbs_ab[1]==null?'':info.Hepatitis.hbs_ab[1]}}</span>
            </td>
            <td>
              <span>{{info.Hepatitis.hbs_ab[2]==null?'':info.Hepatitis.hbs_ab[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.Hepatitis.HCV_ab!==null">
            <td>
              <div>HCV抗体</div>
            </td>
            <td>（-）</td>
            <td>
              
            </td>
            <td v-for="(item,index) in info.Hepatitis.HCV_ab" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
        </table>
      </div>
      <div style="display:inline-block;vertical-align: top;">
        <warnNotitle></warnNotitle>
      </div>
    </div>
    <div class="part1">
      <div class="aside" style="vertical-align: top;">
        <sideDemo1 color="#5E92C7" height="27.4mm" headline="肝炎评估"></sideDemo1>
      </div>
      <div class="tableRight">
        <table style="height:26.8mm;">
          <tr style="height:7.6mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">HBs抗原</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  <span>呈阳性（+）时，</span>
                  <span class="orange">可考虑为乙型肝炎病毒携带者，需要进行详细检查。</span>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:8.6mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">HBs抗体</span>
              </div>
            </td>
            <td>
              <div class="outBox">
                <div class="innerBox">
                  <span>呈阳性（+）时，过去曾感染乙型肝炎，现在具有免疫的状态。接受过预防接种的人也会呈现（+）。</span>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:10.8mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">HCV抗体</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  <span>呈阳性（+）时，</span>
                  <span class="orange">可考虑为过去曾感染过丙型肝炎，或现在处于感染状态，需要进行详细检查。</span>
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
