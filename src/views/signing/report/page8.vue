<template>
  <div>
    <headTop name="王佳" date="2019-09-09"></headTop>
    <div class="part1">
      <div class="aside" style="margin-right: 4.4mm;vertical-align: top;">
        <sideDemo color="#5E92C7" height="68.4mm" headline="慢病风险评估"></sideDemo>
      </div>
      <div class="topTable every">
        <table style="height:68.4mm;">
          <tr style="height:21.7mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="width:30mm;border:1px solid #5E92C7;">
              <div class="over"><span class="isScale">10年内罹患 <br> 冠心病风险</span></div>
            </td>
            <td style="border:1px solid #5E92C7;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  <div>
                    <span>
                      异常的血脂血压及不良的生活习惯等都会增加罹患冠心病的风险，10 年冠心病风险是根据当前的整体情况评估，预计接下来 的10 年内，发生冠心病的风险概率
                    </span>
                  </div>
                  <div class="blue">10年内罹患冠心病风险</div>
                  <div class="inline rate1">
                    <rate rate="0.01"></rate>
                  </div>
                  <div class="inline warn">
                    <img src="../../../assets/new/低2.png" style="width:4mm;height:4mm;" alt="">
                  </div>
                </div>
              </div>
            </td>
            <td rowspan="3" class="" style="width:99mm;border:1px solid #5E92C7;overflow: hidden;">
              <div class="pointOut" style="height:68.4mm;">
                <div class="point">改善要点 </div>
                <div class="pointBody" style="font-size:13px;">
                  您的糖尿病风险高危。糖尿病会导致血管内膜受损，加速心血管疾病的发生。请您注意改善生活方式和调整膳食结构，控制不良饮食习惯，并在专业人士的指导下积极采取预防措施，积极预防糖尿病的发生。
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:24.2mm;border:1px solid #5E92C7;">
            <td style="border:1px solid #5E92C7;">
              <div class="over"><span class="isScale">10年内罹患 <br> 动脉粥样硬化 <br> 心血管疾病风险</span></div>
            </td>
            <td>
              <div class="outBox">
                <div class="innerBox">
                  <div>
                    <span>肥胖、糖尿病以及不良的生活习惯等都会增加罹患动脉粥样硬化心血管疾病的风险，10 年动脉粥样硬化心血管疾病风险是根据当前的整体情况评估，预计接下来的 10
                      年中，发生动脉粥样硬化心血管疾病的风险概率
                    </span>
                  </div>
                  <div class="blue">
                    10年内罹患动脉粥样硬 <br> 化心血管疾病风险
                  </div>
                  <div class="inline rate2">
                    <rate rate="0.02"></rate>
                  </div>
                  <div class="inline warn" style="margin-top:19px;">
                    <img src="../../../assets/new/低2.png" style="width:4mm;height:4mm;" alt="">
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:22.2mm;border:1px solid #5E92C7;background-color:#E6F2FF;">
            <td style="border:1px solid #5E92C7;">
              <div class="over"><span class="isScale">8年内罹患2型 <br> 糖尿病风险</span></div>
            </td>
            <td>
              <div class="outBox">
                <div class="innerBox">
                  <div>
                    <span>异常的血脂、血压以及家族史等都会增加罹患糖尿病的风险，8 年 2 型糖尿病风险是根据当前的整体情况评估，预计接下来的 8 年内，发生糖尿病的风险概率

                    </span>
                  </div>
                  <div class="blue">
                    10年内罹患冠心病风险
                  </div>
                  <div class="inline rate3">
                    <rate rate="0.1"></rate>
                  </div>
                  <div class="inline warn">
                    <img src="../../../assets/new/超标2x.png" style="width:4mm;height:4mm;" alt="">
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="part1">
      <div class="aside" style="margin-right: 4.4mm;vertical-align: top;">
        <sideDemo color="#6EAE8B" height="188.7mm" headline="健康饮食指数评估"></sideDemo>
      </div>
      <div class="topTable every">
        <table style="height:188.7mm;">
          <tr style="height:29mm;border:1px solid #6EAE8B;background-color:#D7F2E3;">
            <td style="width:30mm;border:1px solid #6EAE8B;">
              <div class="over"><span class="isScale">
                  当前膳食质量 <br>
                  总体健康度评分
                </span></div>
            </td>
            <td style="border:1px solid #6EAE8B;width:109mm;">
              <div class="outBox">
                <div class="innerBox">
                  <div class="presentDiet">
                    <div>
                      健康饮食指数评估您目前饮食的健康程度。分数越高代表膳食越均衡合理，对慢性病控制越有益。
                    </div>
                    <div>
                      <div class="map" id="common_score_map_map">
                        <a>
                          <b>70</b>
                          分
                        </a>
                        <img src="../../../assets/image/shadow.png" alt="">
                        <div :style="{width:70*61/100+'mm'}">&nbsp;</div>
                        <h6>满分：100分</h6>
                      </div>
                    </div>
                  </div>
                  <div class="asidePic">
                    <div class="aside">
                      <div class="text">
                        您的图表
                      </div>
                    </div>
                    <div class="picOut">
                      <div class="pic">
                        <pic name="HEI" unit="mmHg" start="40" step="20"></pic>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td rowspan="3" class="" style="width:99mm;border:1px solid #6EAE8B;overflow: hidden;">
              <div class="pointOut" style="height:188.7mm;">
                <div class="point">改善要点 </div>
                <div class="pointBody" style="font-size:13px;">
                  <div class="textTitle" style="margin-top:-5mm;">
                    血压：
                  </div>
                  <div class="textContent">
                    <div>
                      •控制盐的摄入量（每天不超过1茶匙，约6克）；<br>
                      •控制酱料、腌制、包装食品； <br>
                      •多全谷物、多蔬菜水果、多低脂奶制品； <br>
                      •定期食用鱼类、家禽、豆类和坚果； <br>
                      •少量食用红肉、甜食以及添加糖饮料； <br>
                      •每周至少运动（中强度）150分钟； <br>
                      •尽量戒烟
                    </div>
                  </div>
                  <div class="textTitle">
                    血脂：
                  </div>
                  <div class="textContent">
                    <div>
                      •维持健康体重，控制腰围在正常范围内；<br>
                      •控制动物脂肪的摄入，避免皮脂、肥肉、猪油、牛油等；<br>
                      •适量食用植物油或者不饱和脂肪高的食物，比如深海鱼、坚果、牛油果；<br>
                      •限制饮酒，尽量做到戒酒 <br>
                      •多高纤维食物，如全谷物和蔬菜水果 <br>
                      •每周至少运动（中强度）150分钟
                    </div>
                  </div>
                  <div class="textTitle">
                    血糖：
                  </div>
                  <div class="textContent">
                    <div>
                      •控制整体热量摄入，达到健康体重； <br>
                      •控制每餐淀粉类食物份量为总量的四分之一；<br>
                      •保持碳水化合物在一天中均匀分配； <br>
                      •控制甜食，不喝含糖饮料； <br>
                      •保证优质蛋白质的摄入； <br>
                      •尽量少饮酒，戒烟；<br>
                      •每周至少运动（中强度）150分钟 这里的改善要点是跟着病种走的，别的没有改善要点
                    </div>
                  </div>
                  <div style="text-align:center;margin-top:-3mm;">
                    <img src="../../../assets/new/qr_code.png" style="width:29.3mm;height:27.3mm;" alt="">
                  </div>
                  <div class="textContent">
                    <div style="text-align:center;line-height:20px;">
                      详细每日饮食指导及慢病 <br>
                      管理请扫二维码，<br>
                      获取您的私人营养师。
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:67.2mm;border:1px solid #6EAE8B;">
            <td style="border:1px solid #6EAE8B;">
              <div class="over"><span class="isScale">
                  宏量营养素 <br>
                  分配评估
                </span></div>
            </td>
            <td>
              <div class="outBox">
                <div class="innerBox">
                  <div>
                    <div class="text1">下列营养素为人体提供基本的能量，合理分配是健康膳食结构的基础。</div>
                    <div class="text2">
                      <div style="width:158mm;transform:scale(0.8);transform-origin:0 0;">
                        碳水化合物、蛋白质和脂肪是三大为人体提供基本
                        能量的营养素，合理分配是健康膳食结构的基础。
                        <br> “可接受范围”(AMDR)是指该膳食结构与较低慢性病风险相关，同时提供人体所需的必需营养素摄入。如果摄入量超过
                        AMDR，则可能增加慢性疾病和/或必需营养素摄入不足的风险。</div>
                    </div>
                  </div>
                  <div class="component">
                    <div class="head">
                      <div class="left">
                        <div>评估项目</div>
                        <div>Component</div>
                      </div>
                      <div class="right">
                        <span class="block purple"></span><span class="btext">总能量</span>
                        <span class="block deepPurple"></span><span class="btext">可接受范围</span>
                      </div>
                    </div>
                    <div class="component_line"></div>
                    <div>
                      <span class="text-width">碳水化合物</span>
                      <div class="inline">
                        <kedu width="18.9" left="38.8" num="5"></kedu>
                      </div>
                    </div>
                    <div>
                      <span class="text-width">蛋白质</span>
                      <div class="inline">
                        <kedu width="22.9" left="17.8" num="1"></kedu>
                      </div>
                    </div>
                    <div>
                      <span class="text-width">脂肪</span>
                      <div class="inline">
                        <kedu width="12.9" left="17.8" num="1"></kedu>
                      </div>
                    </div>
                  </div>
                  <div class="cBottom">
                    <div class="bTop">
                      <div class="bLeft">
                        <div>当前摄入量</div>
                        <div>Current Intake</div>
                      </div>
                      <div class="bRight">
                        <div>可接受范围</div>
                        <div>Acceptable Distribution Range</div>
                      </div>
                    </div>
                    <div class="right">
                      <div class="top1">
                        <div class="text-width">碳水化合物</div>
                        <div class="current">
                          50%总能量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="accept">
                          45-65%总能量
                        </div>
                      </div>
                      <div class="top1">
                        <div class="text-width">蛋白质</div>
                        <div class="current">
                          10%总能量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div class="accept">
                          10-35%总能量
                        </div>
                      </div>
                      <div class="top1">
                        <div class="text-width">脂肪</div>
                        <div class="current">
                          40%总能量↑
                          <img src="../../../assets/new/超标2x.png" style="width:3mm;height:3mm;" alt="">
                        </div>
                        <div class="accept">
                          20-35%总能量
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr style="height:74.3mm;border:1px solid #6EAE8B;background-color:#D7F2E3;">
            <td style="border:1px solid #6EAE8B;">
              <div class="over"><span class="isScale">
                  慢病相关营养 <br>
                  素摄入量评估
                </span></div>
            </td>
            <td style="background-color:#fff;">
              <div class="outBox">
                <div class="innerBox">
                  <div>
                    <span>
                      下列营养素摄入过多，则增加心血管疾病、糖尿病、肥胖、癌症等慢性病风险。
                    </span>
                    <div class="outScale">
                      <span class="scale8">
                        饱和脂肪酸、钠、和添加糖若摄入过多， 则增加心血管疾病、糖尿病、肥胖、癌症等慢性病风险。
                      </span>
                    </div>
                  </div>
                  <div class="component">
                    <div class="head">
                      <div class="left">
                        <div>评估项目</div>
                        <div>Component</div>
                      </div>
                      <div class="right" style="margin-right:3px;">
                        <span class="block deepPurple"></span><span class="btext">推荐范围</span>
                      </div>
                    </div>
                    <div class="component_line"></div>
                    <div>
                      <span class="text-width">饱和脂肪酸</span>
                      <div class="inline">
                        <kedu width="18.9" left="38.8" num="5"></kedu>
                      </div>
                    </div>
                    <div>
                      <span class="text-width">钠*</span>
                      <div class="inline">
                        <kedu width="22.9" left="17.8" num="1"></kedu>
                      </div>
                    </div>
                    <div>
                      <span class="text-width">添加糖*</span>
                      <div class="inline">
                        <kedu width="12.9" left="17.8" num="1"></kedu>
                      </div>
                    </div>
                    <div>
                      <span class="text-width">添加糖*</span>
                      <div class="inline">
                        <kedu width="12.9" left="17.8" num="1"></kedu>
                      </div>
                    </div>
                    <div class="component_line"></div>
                    <div class="outScale">
                      <span class="scale8">
                        * 钠和添加糖多隐藏在食品加工过程中，此评估可能低估您的当前摄入量。
                      </span>
                    </div>
                    <div class="cBottom">
                      <div class="bTop">
                        <div class="bLeft">
                          <div>当前摄入量</div>
                          <div>Current Intake</div>
                        </div>
                        <div class="bRight">
                          <div>可接受范围</div>
                          <div>Acceptable Distribution Range</div>
                        </div>
                      </div>
                      <div class="right">
                        <div class="top1">
                          <div class="text-width">饱和脂肪酸</div>
                          <div class="current">
                            12%总能量↑
                            <img src="../../../assets/new/超标2x.png" style="width:3mm;height:3mm;" alt="">
                          </div>
                          <div class="accept">
                            &lt;7% 总能量
                          </div>
                        </div>
                        <div class="top1">
                          <div class="text-width">钠*</div>
                          <div class="current">
                            5700毫克↑&nbsp;&nbsp;&nbsp;
                            <img src="../../../assets/new/超标2x.png" style="width:3mm;height:3mm;" alt="">
                          </div>
                          <div class="accept">
                            &lt;2300毫克/天
                          </div>
                        </div>
                        <div class="top1">
                          <div class="text-width">添加糖*</div>
                          <div class="current">
                            40克↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src="../../../assets/new/超标2x.png" style="width:3mm;height:3mm;" alt="">
                          </div>
                          <div class="accept">
                            男性：&lt;36克/天
                          </div>
                        </div>
                        <div class="top1">
                          <div class="text-width">添加糖*</div>
                          <div class="current">
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                          <div class="accept">
                            女性：&lt;25克/天
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <pagenum pagenum="08"></pagenum>
  </div>
</template>
<script>
  import headTop from './common/title'
  import sideDemo1 from './common/sideDemo2'
  import sideDemo from './common/sideDemo'
  import warnNotitle from './common/warnNotitle'
  import pagenum from './common/pagenum'
  import rate from './common/rate'
  import pic from './common/pic'
  import kedu from './common/kedu'

  export default {
    data() {
      return {

      }
    },
    components: {
      headTop,
      sideDemo1,
      warnNotitle,
      sideDemo,
      pagenum,
      rate,
      pic,
      kedu
    }
  }

</script>
<style scoped>
  .contain {
    height: 290mm;
  }

  .container {
    margin-top: 5mm;
    margin-left: 7.6mm;
  }

  .line {
    width: 200.7mm;
    height: 2px;
    background: rgba(94, 146, 199, 1);
    margin-top: 4.5mm;
    margin-left: 7.8mm;
  }

  .part1 {
    margin-left: 7.6mm;
    margin-top: 5mm;
  }

  .aside {
    display: inline-block;
    margin-right: 4.4mm;
    vertical-align: top;
  }

  .topTable {
    display: inline-block;
  }

  .topTable table {
    width: 189mm;
    height: 30mm;
    border: 1px solid #5E92C7;
    border-collapse: collapse;
  }

  .every table {
    height: 45.7mm;
  }

  .half table {
    height: 27mm;
    width: 178.8mm;
    border-collapse: collapse;
    box-sizing: border-box;
    font-size: 3.18mm;
  }

  .half table tr {
    height: 5.8mm;
  }

  .half table tr td {
    border: 1px solid #8F82BC;
    text-align: center;
  }

  .half table tr td:first-child {
    text-align: left;
  }

  .half table tr td:first-child div {
    padding-left: 2mm;
  }

  .isScale {
    font-size: 3.53mm;
    width: 30mm;
    display: block;
    margin-top: -18px;
    padding-left: 10px;
    transform: scale(0.9);
    transform-origin: 0 0;
  }

  .outBox {
    box-sizing: border-box;
    padding-left: 4mm;
    width: 107mm;
    overflow: hidden;
  }

  .outBox .innerBox {
    width: 115mm;
    font-size: 2.28mm;
    transform: scale(0.9);
    transform-origin: 0 0;

  }

  .pointOut {
    width: 47mm;
    height: 53mm;

  }

  .point {
    width: 48mm;
    height: 6mm;
    color: #fff;
    text-align: center;
    line-height: 20px;
    font-size: 3.18mm;
    background-color: #556FB5;
  }

  .pointBody {
    /* padding-top: 10px; */
    text-align: left;
    line-height: 18px;
    font-size: 2.82mm;
    transform: scale(0.9);
  }

  .orange {
    color: #FF5400;
  }

  .lineH {
    line-height: 19px;
    text-align: left;
  }

  .bun /deep/ .demo {
    line-height: 17px;
  }

  .bun /deep/ .text {
    margin-top: 2.4mm;
  }

  .blue {
    color: #5E92C7;
    margin-top: 10px;
    display: inline-block;
  }

  .inline {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
  }

  .rate1 {
    margin-top: 12px;
  }

  .rate2 {
    margin-top: 20px;
  }

  .rate3 {
    margin-top: 12px;
  }

  .warn {
    margin-left: 50px;
    margin-top: 10px;
  }

  .presentDiet {
    width: 66mm;
    display: inline-block;
  }

  .map {
    width: 61mm;
    position: relative;
    top: 2.3mm;
  }

  .map a {
    font-size: 2.02mm;
    color: #556FB5;
    position: relative;
    top: 0mm;
    left: 35mm;
  }

  .map b {
    font-size: 3.47mm;
  }

  .map img {
    width: 61mm;
    height: 2.7mm;
  }

  .map div {
    background-color: #8F82BC !important;
    height: 2.7mm;
    position: relative;
    top: -3.6mm;
  }

  .map h6 {
    margin: 0;
    text-align: right;
    position: absolute;
    bottom: 0mm;
    right: 0mm;
  }

  .asidePic {
    display: inline-block;
    vertical-align: top;
    width: 40.3mm;
    background: #fff;
    border: 1px solid #E4007F;
    overflow: hidden;
    white-space: nowrap;
    margin-left: -1px;
  }

  .asidePic .pic {
    transform: scale(0.9);
    transform-origin: 0 0;

  }

  .asidePic .aside {

    height: 25.1mm;
    width: 5.2mm;
    color: #fff;
    display: inline-block;
    margin-right: 0;
    text-align: center;
    background-color: #E4007F;
  }

  .asidePic .aside .text {
    font-size: 2.85mm;
    display: block;
    transform: scale(0.9);
    transform-origin: 0 0;
    white-space: normal;
  }

  .picOut {
    width: 34mm;
    height: 24.5mm;
    overflow: hidden;
    display: inline-block;
  }

  .innerBox .text1 {
    font-size: 2.82mm;
  }

  .innerBox .text2 {
    font-size: 2.12mm;
    width: 115mm;
    overflow: hidden;
  }

  .component {
    margin-top: -5px;
  }

  .component .head .left {
    font-size: 2.42mm;
    float: left;
  }

  .component .head .right {
    float: right;
    margin-top: 10px;
    margin-right: 15px;
  }

  .component .head::after {
    display: block;
    clear: both;
    content: "";
  }

  .component .component_line {
    width: 110mm;
    border: 1px solid #D6D4D6;
    background-color: #FFEFD9;
  }

  .right .block {
    width: 5.8mm;
    height: 2.4mm;
    display: inline-block;
  }

  .right .btext {
    display: inline-block;
    width: 16mm;
    margin: 0 10px 0 10px;
  }

  .right .block.purple {
    background-color: #E6E2F3;
  }

  .right .block.deepPurple {
    background-color: #8F82BC;
  }

  .component .inline {
    margin-left: 0px;
    transform: scale(1);
  }

  .text-width {
    display: inline-block;
    width: 16mm;
  }

  .bTop .bLeft,
  .bTop .bRight {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    font-size: 2.12mm;
    border-bottom: 2px solid #D6D4D6;
  }

  .bTop {
    margin-left: 20mm;
  }

  .right .current {
    display: inline-block;
    background-color: #8F82BC;
    width: 32mm;
    height: 4.7mm;
    color: #fff;
    text-align: center;
    margin-left: 3mm;
  }

  .right .accept {
    display: inline-block;
    height: 4.7mm;
    width: 57mm;
    margin-left: 1px;
    background-color: #E6E2F3;
    text-align: center;
  }

  .right>div {
    white-space: nowrap;
  }

  .cBottom .right {
    margin-top: 1mm;
  }

  .top1 {
    margin-top: 4px;
  }

  .outScale {
    width: 200mm;
    overflow: hidden;
  }

  .scale8 {
    display: block;
    transform: scale(0.8);
    transform-origin: 0 0;
  }

  .textContent {
    width: 47mm;
    overflow: hidden;
  }

  .textContent>div {
    width: 55mm;
    font-size: 12px;
    transform: scale(0.9);
    transform-origin: 0 0;
  }

</style>
