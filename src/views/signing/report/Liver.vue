<template>
  <div class="page-container">
    <div class="part1">
      <div class="aside">
        <sideDemo1 color="#8F82BC" height="70mm" headline="肝功能检测数值"></sideDemo1>
      </div>
      <div class="tableRight every half">
        <table style="min-height:70mm;">
          <tr style="height:5mm;background-color:#E6E2F3;">
            <td style="width:40mm;"></td>
            <td style="width:36mm;">参考范围</td>
            <td style="width:7.3mm;"></td>
            <td style="width:32.7mm;background-color:#CCC5E2;">{{info.Liver.date_list[0]==null?'':info.Liver.date_list[0]}}</td>
            <td style="width:32mm;">{{info.Liver.date_list[1]==null?'':info.Liver.date_list[1]}}</td>
            <td style="width:31mm;">{{info.Liver.date_list[2]==null?'':info.Liver.date_list[2]}}</td>
          </tr>
          <tr v-if="info.Liver.AST!==null">
            <td>
              <div>
                门冬氨酸氨基转移酶
                <br />AST/SGOT
              </div>
            </td>
            <td>男15-45，女13-40 IU/L</td>
            <td>
              <template v-if="info.Liver.AST[0]!==null">
              <span v-if="(info.Liver.AST[0]<15&&info.PersonInfo.gender=='男')||(info.Liver.AST[0]<13&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="(info.Liver.AST[0]>45&&info.PersonInfo.gender=='男')||(info.Liver.AST[0]>40&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Liver.AST" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
          <tr v-if="info.Liver.ALT!==null" style="background-color:#E6E2F3;">
            <td>
              <div>
                丙氨酸氨基转移酶
                <br />ALT/SGPT
              </div>
            </td>
            <td>男9-50，女7-40 IU/L</td>
            <td>
              <template v-if="info.Liver.ALT[0]!==null">
              <span v-if="(info.Liver.ALT[0]<9&&info.PersonInfo.gender=='男')||(info.Liver.ALT[0]<7&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="(info.Liver.ALT[0]>50&&info.PersonInfo.gender=='男')||(info.Liver.ALT[0]>40&&info.PersonInfo.gender=='女')">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Liver.ALT[0]==null?'':info.Liver.ALT[0]}}</span>
            </td>
            <td>
              <span>{{info.Liver.ALT[1]==null?'':info.Liver.ALT[1]}}</span>
            </td>
            <td>
              <span>{{info.Liver.ALT[2]==null?'':info.Liver.ALT[2]}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>
                谷氨酰转肽酶
                <br />γ-GTP/GGT
              </div>
            </td>
            <td>男10-60，女7-45 IU/L</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>乳酸脱氢酶(LDH)</div>
            </td>
            <td>252IU/L</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>碱性磷酸酶（ALP）</div>
            </td>
            <td>男45-125，女35-135 IU/L</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>总蛋白</div>
            </td>
            <td>65-85g/L</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="info.Liver.ALB!==null">
            <td>
              <div>白蛋白</div>
            </td>
            <td>40-55g/L</td>
            <td>
              <template v-if="info.Liver.ALB[0]!==null">
              <span v-if="info.Liver.ALB[0]<40">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.Liver.ALB[0]>55">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td v-for="(item,index) in info.Liver.ALB" :key="index">
              <span>{{item==null?'':item}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>白/球比</div>
            </td>
            <td>(1.2-2.4):1</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="info.Liver.TBIL!==null" style="background-color:#E6E2F3;">
            <td>
              <div>总胆红素</div>
            </td>
            <td>3.4-17.1μmol/L</td>
            <td>
              <template v-if="info.Liver.TBIL[0]!=null">
              <span v-if="info.Liver.TBIL[0]<3.4">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.Liver.TBIL[0]>17.1">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="background-color:#ccc5e2;">
              <span>{{info.Liver.TBIL[0]==null?'':info.Liver.TBIL[0]}}</span>
            </td>
            <td>
              <span>{{info.Liver.TBIL[1]==null?'':info.Liver.TBIL[1]}}</span>
            </td>
            <td>
              <span>{{info.Liver.TBIL[2]==null?'':info.Liver.TBIL[2]}}</span>
            </td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>胆碱酯酶（CHE）</div>
            </td>
            <td>5000-12000IU/L</td>
            <td></td>
            <td style="background-color:#ccc5e2;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr style="background-color:#E6E2F3;">
            <td>
              <div>尿胆素原</div>
            </td>
            <td>0.84-4.2μmol/L</td>
            <td>
              
            </td>
            <td style="background-color:#ccc5e2;"></td>
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
        <sideDemo1 color="#5E92C7" height="133.7mm" headline="肝功能评估"></sideDemo1>
      </div>
      <div class="tableRight every">
        <table style="height:133.6mm;">
          <tr style="height:13mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  AST（GOT）
                  <br />ALT（GPT）
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div
                  class="innerBox"
                >是制造构成体内蛋白质的氨基酸的必要酶，各种细胞被破坏时，呈现高值。特别是ALT很多都存在于肝脏内。患有各种肝疾病，心肌梗塞，肌炎，传染性单核细胞增多症，肝癌等时数值变高。</div>
              </div>
            </td>
            <td rowspan="11" style="border:1px solid #5E92C7;overflow:hidden;">
              <div class="pointOut">
                <div class="point">维持肝功能正常小贴士</div>
                <div class="pointBody">
                  • 避免过量摄入动物脂肪和添加糖;<br>
                  • 限制饮酒，尽量做到戒酒;<br>
                  • 如果饮酒，成年人一天最大饮酒的酒精量不超过15克（女性）和25克（男性）
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:11.2mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">γ-GTP</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">当肝脏、胆道系统有异常时，比其他的酶更早显示出异常值，患有酒精肝，药物性肝炎等时数值变高。</div>
              </div>
            </td>
          </tr>
          <tr style="height:11.7mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  ZTT
                  <br />TTT
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">检查血清蛋白成分的质量，数量是否存在异常。各种肝疾病（对判断疾病的进展有用），慢性感染病，胶原病，骨髓瘤等等时数值会变高。</div>
              </div>
            </td>
          </tr>
          <tr style="height:16.1mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  乳酸脱氢酶
                  <br />（LDH）
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  肝脏中存在最多，也存在于心脏、肺、肌肉。
                  <br />急性肝炎、溶血性贫血、心肌梗塞、肌炎、传染性单核细胞增多症、肺梗塞、淋巴肿瘤、各种肿瘤恶化等数值会升高
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:15.6mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  碱性磷酸酶
                  <br />（ALP）
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  胆道系统酶之一、肝胆系统之外的骨骼、小肠、胎盘中也存在。
                  <br />各种肝疾患、胆汁淤积、肝肿瘤、胆结石、软骨病、骨肿瘤、甲状腺功能亢进等时数值会升高。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:12.7mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">总蛋白</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">观察肝脏、心脏、肾脏的疾患以及身体的营养状态。各种肝疾患、低营养状态、肾病综合征、恶性肿瘤等时数值会降低。骨髓瘤时会升高。</div>
              </div>
            </td>
          </tr>
          <tr style="height:6.8mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">白蛋白</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">是蛋白的一种，数值降低时可能会是肝硬化、肾脏病。</div>
              </div>
            </td>
          </tr>
          <tr style="height:9.7mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">白/球比</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">血液中白蛋白（A）与球蛋白（G）的比率，各种肝疾患、肾病综合征、骨髓瘤、营养不良、恶性肿瘤等时数值降低。</div>
              </div>
            </td>
          </tr>
          <tr style="height:12.2mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">总胆红素</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div
                  class="innerBox"
                >是胆汁内所含的色素，肝功能障碍、胆结石、梗阻性黄疸、溶血性贫血等时数值升高。若其他的检查数值无异常，考虑是无需担心的体制性黄疸。</div>
              </div>
            </td>
          </tr>
          <tr style="height:11.7mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  胆碱酯酶
                  <br />（CHE）
                </span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">在肝脏被合成的酶，脂肪肝、肾病综合征、甲状腺功能亢进等时数值升高。肝硬化、恶性肿瘤等时数值降低。</div>
              </div>
            </td>
          </tr>
          <tr style="height:14.7mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">尿胆素源</span>
              </div>
            </td>
            <td style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">肝脏和胆道异常时，尿液中的排出量会增加。各种肝疾患、胆道梗阻、溶血性贫血等时呈阳性（+）。</div>
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
import warnNotitle from "./common/warnNotitle";
export default {
  data() {
    return {
    };
  },
  components: {
    sideDemo1,
    warnNotitle,
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
  margin: 0 auto;
  /* margin-top:-300mm; */
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
}
.every table {
  height: 45.7mm;
}

.half table {
  height: 34mm;
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
  width: 40mm;
  height: 136mm;
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
