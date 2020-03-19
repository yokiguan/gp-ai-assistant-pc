<template>
  <div class="module-container">
    <div class="part1">
      <div class="aside">
        <sideDemo headline="糖代谢检测" color="rgba(143,130,188,1)" height="35mm"></sideDemo>
      </div>
      <div class="tableRight" >
        <table style="min-height:35mm;">
          <tr style="height:6.3mm;background-color:#E6E2F3;">
            <td style="width:40mm;border:1px solid #8F82BC;"></td>
            <td style="width:35mm;text-align:center;border:1px solid #8F82BC;">参考范围</td>
            <td style="width:7.5mm;text-align:center;border:1px solid #8F82BC;"></td>
            <td
              style="width:32.5mm;text-align:center;border:1px solid #8F82BC;background-color:#CCC5E2;"
            >{{info.BloodSugar.date_list[0]==null?'':info.BloodSugar.date_list[0]}}</td>
            <td style="width:32mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodSugar.date_list[1]==null?'':info.BloodSugar.date_list[1]}}</td>
            <td style="width:31mm;text-align:center;border:1px solid #8F82BC;">{{info.BloodSugar.date_list[2]==null?'':info.BloodSugar.date_list[2]}}</td>
          </tr>
          <tr v-if="info.BloodSugar.FBS!==null" style="height:5.6mm;">
            <td>血糖</td>
            <td style="border:1px solid #8F82BC;text-align:center;">＜11.1</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodSugar.FBS[0]!==null">
              <span v-if="info.BloodSugar.FBS[0]>11.1">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodSugar.FBS[0]==null?'':info.BloodSugar.FBS[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.FBS[1]==null?'':info.BloodSugar.FBS[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.FBS[2]==null?'':info.BloodSugar.FBS[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodSugar.GU!==null" style="height:6.6 mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;" class="t-center">尿糖</td>
            <td style="border:1px solid #8F82BC;text-align:center;">0.1-0.8</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span v-if="GU.length>=1">{{info.BloodSugar.GU[0]==null?'':info.BloodSugar.GU[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span v-if="GU.length>=2">{{info.BloodSugar.GU[1]==null?'':info.BloodSugar.GU[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span v-if="GU.length>=3">{{info.BloodSugar.GU[2]==null?'':info.BloodSugar.GU[2]}}</span>
            </td>
          </tr>
          <tr v-if="info.BloodSugar.HbAlc!==null" style="height:6.1mm;background-color:#E6E2F3;">
            <td style="border:1px solid #8F82BC;text-align:left;">糖化血红蛋白(HbAlc)</td>
            <td style="border:1px solid #8F82BC;text-align:center;">4.0~5.6</td>
            <td style="border:1px solid #8F82BC;text-align:center;line-height:12px;">
              <template v-if="info.BloodSugar.HbAlc[0]!==null">
              <span v-if="info.BloodSugar.HbAlc[0]<4.0">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/低2.png" alt />
              </span><span v-else-if="info.BloodSugar.HbAlc[0]>5.6">
              <img style="width:5mm;height:5mm;" src="../../../assets/new/超标2x.png" alt />
              </span><span v-else>
              <img style="width:5mm;height:5mm;" src="../../../assets/new/正常2.png" alt />
              </span>
              </template>
            </td>
            <td style="border:1px solid #8F82BC;background-color:#CCC5E2;text-align:center;">
              <span>{{info.BloodSugar.HbAlc[0]==null?'':info.BloodSugar.HbAlc[0]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.HbAlc[1]==null?'':info.BloodSugar.HbAlc[1]}}</span>
            </td>
            <td style="border:1px solid #8F82BC;text-align:center;">
              <span>{{info.BloodSugar.HbAlc[2]==null?'':info.BloodSugar.HbAlc[2]}}</span>
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
        <sideDemo color="#5E92C7" height="48.1mm" headline="糖代谢评估"></sideDemo>
      </div>
      <div class="tableRight every">
        <table>
          <tr style="height:8.1mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:30mm;border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">尿糖</span>
              </div>
            </td>
            <td colspan="2" style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">测定尿液所含的糖分。用于诊断有无糖尿病。</div>
              </div>
            </td>
            <td rowspan="5" class style="border:1px solid #5E92C7;overflow: hidden;">
              <div class="pointOut">
                <div class="point">维持血糖正常小贴士</div>
                <div class="pointBody" style="line-height:15px;text-align:left;">
                  • 控制整体热量摄入，达到健康体重；
                  <br />• 控制每餐淀粉类食物份量为总量的四分之一；
                  <br />• 保持碳水化合物在一天中均匀分配；
                  <br />• 控制甜食，不喝含糖饮料；
                  <br />• 保证优质蛋白质的摄入；
                  <br />• 尽量少饮酒，戒烟；
                  <br />• 每周至少运动（中强度）150分钟
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:5.8mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">血糖</span>
              </div>
            </td>
            <td colspan="2" style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">若空腹时血糖高，首先怀疑是糖尿病。</div>
              </div>
            </td>
          </tr>
          <tr style="height:11.7mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over">
                <span class="isScale">
                  HbAlc
                  <br />（血红蛋白Alc）
                </span>
              </div>
            </td>
            <td colspan="2" style="border:1px solid #5E92C7;">
              <div class="outBox">
                <div class="innerBox">
                  能了解过去1~3个月的平均血糖。因为基本不受饮食影响，是糖尿病检查的重要
                  项目。
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
  import sideDemo from './common/sideDemo'
  import sideDemo1 from './common/sideDemo1'
  import warn from './common/warnNotitle'
  import Chart from '../components/chart'
  export default {
    data() {
      return {
        GU:this.info.BloodSugar.GU,
        FBS:this.info.BloodSugar.FBS,
        HbAlc:this.info.BloodSugar.HbAlc
      }
    },
    components: {
      sideDemo,
      warn,
      sideDemo1,
      Chart
    },
    methods:{
      getDataList(objlist){
        let list=objlist.map(function(item){
          return item.data
        })
        return list
      }
    },
    props:['info']
  }

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
    width:80%;
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
    background-color: #E4007F;
    width: 6mm;
  }

  .myPic .aside {
    display: inline-block;
    width: 6mm;
    height: 37mm;
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

  .myPicContent .pic1,
  .myPicContent .pic2,
  .myPicContent .pic3 {
    display: inline-block;
    margin-top: 4mm;
    margin-left: 5mm;
  }

  .ps {
    font-size: 2.12mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(174, 93, 161, 1);
    line-height: 16px;
    position: absolute;
    transform: scale(0.8);
    bottom: 0mm;
    right: -4mm;
  }

  .over {
    width: 30mm;
    overflow: hidden;
  }

  .isScale {
    font-size: 14px;
    width: 30mm;
    display: block;
    padding-left: 10px;
    transform: scale(0.9);
    transform-origin: 0 0;
  }

  .outBox {
    box-sizing: border-box;
    padding-left: 4mm;
    width: 110mm;
    /* overflow: hidden; */
    word-wrap: break-word;
    word-break: break-all; 
  }

  .outBox .innerBox {
    word-wrap: break-word;
    word-break: break-all;    
    font-size:12px;
  }

  .pointOut {
    width:100%;
    height: 60mm;
    vertical-align: top;
    float: top;
  }

  .point {
    height: 6mm;
    color: #fff;
    text-align: center;
    line-height: 20px;
    font-size: 3.4mm;
    background-color: #556FB5;
  }

  .pointBody {
    padding-top: 0px;
    text-align: left;
    line-height: 20px;
    font-size: 14px;
    transform: scale(0.9);
  }

</style>
