<template>
  <div class="page-container">
    <div class="part1">
      <div class="aside">
        <sideDemo1 color="#8F82BC" height="66.2mm" headline="血常规检测数值"></sideDemo1>
      </div>
      <div class="tableRight every half">
        <table style="min-height:66.2mm;">
          <tr style="height:6.1mm;background-color:#E6E2F3;">
            <td style="width:40mm;"></td>
            <td style="width:36mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;background-color:#CCC5E2;">{{info.Blood.date_list[0]==null?'':info.Blood.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Blood.date_list[1]==null?'':info.Blood.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Blood.date_list[2]==null?'':info.Blood.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Blood.Hemoglobin!==null">
            <td>
              <div>血红蛋白</div>
            </td>
            <td>男 130-175 g/L<br>女 115-150 g/L</td>
            <td> 
              <template v-if="info.Blood.Hemoglobin[0]!==null">
              <span v-if="(info.Blood.Hemoglobin[0]<130&&info.PersonInfo.gender=='男')||(info.Blood.Hemoglobin[0]<115&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="(info.Blood.Hemoglobin[0]>175&&info.PersonInfo.gender=='男')||(info.Blood.Hemoglobin[0]>150&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Blood.Hemoglobin" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>红细胞比容</div>
            </td>
            <td>男 0.40-0.50<br>女 0.35-0.45</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>红细胞计数</div>
            </td>
            <td>
              男 4.3-5.8 × 10
              <sup>12</sup>/L，女 3.8-5.1 × 10
              <sup>12</sup>/L
            </td>
            <td>
              
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="info.Blood.WBC!==null" style="background-color:#E6E2F3;">
            <td>
              <div>白细胞计数</div>
            </td>
            <td>
              3.5-9.5 × 10
              <sup>9</sup>/L
            </td>
            <td>
              <template v-if="info.Blood.WBC[0]!==null">
              <span v-if="info.Blood.WBC[0]<3.5">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.Blood.WBC[0]>9.5">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Blood.WBC[0]==null?'':info.Blood.WBC[0]}}</span>
            </td>
            <td>
              <span>{{info.Blood.WBC[1]==null?'':info.Blood.WBC[1]}}</span>
            </td>
            <td>
              <span>{{info.Blood.WBC[2]==null?'':info.Blood.WBC[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.Blood.Platelet!==null">
            <td>
              <div>血小板计数</div>
            </td>
            <td>
              125-350 × 10
              <sup>9</sup>/L
            </td>
            <td>
              <template v-if="info.Blood.Platelet[0]!==null">
              <span v-if="info.Blood.Platelet[0].data<125">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.Blood.Platelet[0].data>350">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Blood.Platelet" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>红细胞平均体积</div>
            </td>
            <td>82-100fL</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>平均血红蛋白含量</div>
            </td>
            <td>27-34pg</td>
            <td>
            
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>平均血红蛋白浓度</div>
            </td>
            <td>316-354g/L</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>血铁清</div>
            </td>
            <td>男 11.6-31.3 μmol/L，女 9.0-30.4 μmol/L</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;height:7.8mm;">
            <td>
              <div>中性粒细胞计数</div>
            </td>
            <td>
              1.8-6.3× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>中性粒细胞百分比</div>
            </td>
            <td>40-75%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;height:7.8mm;">
            <td>
              <div>淋巴细胞计数</div>
            </td>
            <td>
              1.1-3.2× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>淋巴细胞百分比</div>
            </td>
            <td>20-50%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;height:7.8mm;">
            <td>
              <div>单核细胞计数</div>
            </td>
            <td>
              0.1-0.6× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>单核细胞百分比</div>
            </td>
            <td>3-10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;height:7.8mm;">
            <td>
              <div>嗜酸性粒细胞计数</div>
            </td>
            <td>
              0.2-0.52× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>嗜酸性粒细胞百分比</div>
            </td>
            <td>0.4-8.0%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;height:7.8mm;">
            <td>
              <div>嗜碱性粒细胞计数</div>
            </td>
            <td>
              0-0.06× 10
              <sup>9</sup>/L
            </td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>嗜碱性粒细胞百分比</div>
            </td>
            <td>0-1%</td>
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
      <div class="aside">
        <sideDemo1 color="#5E92C7" height="101.1mm" headline="血常规评估"></sideDemo1>
      </div>
      <div class="tableRight every">
        <table style="height:101.1mm;">
          <tr style="height:12mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:40mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">血红蛋白</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">血红蛋白又称[血红素]，血红蛋白的铁原子和氧结合，把氧气输送到全身。若数量减少，需要对贫血进行治疗。</div>
              </div>
            </td>
            <td rowspan="10" style="border:1px solid #5E92C7;overflow:hidden;">
              <div class="pointOut" style="height:101.1mm;">
                <div class="point">维持血常规正常小贴士</div>
                <div class="pointBody">
                  • 坚持1日3餐，要营养均衡。
                  <br />• 对于贫血，要多吃菠菜等绿黄色蔬菜，动物肝脏，肉类等含铁成份多的食物。
                  <br />贫血中较多的是低色素性贫血（缺铁性贫血），其中女性居多，铁的摄入不足是其原因。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11.2mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">红细胞比容</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  显示血液中红细胞等血球成分的比值。
                  <br />贫血时数值降低：红细胞增多症时呈现高值。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11.3mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">红细胞数</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">用于诊断贫血和红细胞增多症，贫血中最多的是[缺铁性贫血]，但也有其他类型的贫血，判断其原因很重要。</div>
              </div>
            </td>
          </tr>
          <tr style="height:11.5mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">白细胞总数</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  白细胞对抗侵入体内的细菌和异物，起到保护身体的作用。
                  <br />炎症性疾病，细菌感染，白血病时数值会增加。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:6.6mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">血小板</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">止血功能。若血小板减少、或功能低下时，就会容易出血、或不易止血。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6.1mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">MCV</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">平均红细胞体积，表示1个红细胞的大小。</div>
              </div>
            </td>
          </tr>
          <tr style="height:11.2mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">MCH</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  平均红细胞血红蛋白含量。
                  <br />表示1个红细胞的血红蛋白量。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11.5mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">MCHC</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  平均红细胞血红蛋白浓度。表示单位体积红细胞的血红蛋白浓度。根据MCV、
                  MCH、MCHC等的数值，可以推测贫血的原因和种类。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11.9mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">血铁清</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  合成血红蛋白的必要物质，可用于贫血的鉴别诊断。
                  缺铁性贫血等时数值低下的。
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
.page-container {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  /* height: 330mm; */
  vertical-align: middle;
  /* margin: 0 auto; */
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

.over {
  width: 30mm;
  overflow: hidden;
}

.outBox {
  box-sizing: border-box;
  padding-left: 2mm;
  overflow: hidden;
}

.outBox .innerBox {
  margin-top: 3px;
  font-size: 12px;
  line-height: 16px;
}

.isScale {
  font-size: 3.4mm;
  width: 35mm;
  display: block;
  padding-left: 10px;
  transform: scale(0.9);
  transform-origin: 0 0;
}

.pointOut {
  width: 50mm;
  /* height: 136mm; */
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

