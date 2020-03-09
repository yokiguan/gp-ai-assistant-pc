<template>
<div class="module-container">
<div class="part1">
      <div class="aside">
        <sideDemo headline="近期风险" color="rgba(110,174,139,1)" height="30mm"></sideDemo>
      </div>
      <div class="tableRight">
        <el-col :span='24' class="recentRisk">
          <b>新冠肺炎（COVID-19）</b>
          <br>人群普遍易感。<span style="color:red;font-weight:bold">老年人及患有慢性疾病的人群感染后病情较重，</span>
        儿童及婴幼儿也有发病。当前没有疫苗可以预防新冠肺炎（COVID-19）感染。预防感染的最佳方式是避免与该病毒或病毒携带者的进行接触。</el-col>
      </div>
      </div>
</div>
</template>
<script>
import sideDemo from "./common/sideDemo";
export default{
  components:{
    sideDemo,
  }
}
</script>
<style lang="scss" scoped>
.recentRisk{
  font-size:18px;
  line-height: 30px;
  margin:15px 15px 15px 15px;
  transform: scale(0.95)
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
  background: rgba(215, 242, 227, 1);
  border: 1px solid rgba(110, 174, 139, 1);
}
</style>