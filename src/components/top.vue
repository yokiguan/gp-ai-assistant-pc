<template>
  <div class="top">
    <div class="top-L">
      <img style="height:35px;width:30px" src="../assets/nav.png" />
      <div class="top-L-title">家庭医生智能助手 · {{name}}</div>
    </div>
    <div class="top-R">
      <div>{{time}} | {{doctorname}}</div>
      <img width='16' height='16' style="margin-left:5px" @click="exit" src='../assets/退出.png'/>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  props: {},
  components: {},
  data() {
    return {
      name:this.$route.name=='riskReport'?'慢病风险及生活健康检验报告':'健康管理计划',
      time: this.formatDate(new Date()),
      doctorname:this.$store.state.name
    };
  },
  created() {},
  methods: {
    formatDate(date) {
      var myyear = date.getFullYear();
      var mymonth = date.getMonth() + 1;
      var myweekday = date.getDate();
      if (mymonth < 10) {
        mymonth = "0" + mymonth;
      }
      if (myweekday < 10) {
        myweekday = "0" + myweekday;
      }
      return myyear + "-" + mymonth + "-" + myweekday;
    },
    exit() {
      this.$router.push({
        path: "/signing"
      });
    }
  }
};
</script>
<style lang="css" scoped>
.top {
  width: 100%;
  height: 8vh;
  padding: 0 20px;
  box-sizing: border-box;
  background: linear-gradient(90deg, rgb(24,231,217), rgb(95,121,234));
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  vertical-align: middle;
}
.top-L {
  line-height: 63px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top-L-title {
  margin-left: 10px;
}
.top-R {
  line-height: 63px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>