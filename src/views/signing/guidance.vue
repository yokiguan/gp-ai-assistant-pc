<template>
  <div class="GuidanceContent">
    <div id="printContent">
      <Plan></Plan>
    </div>
    <el-dialog title="提示" :visible.sync="mobileTips" width="30%">
      <div>网址：{{url}}</div>
      <div>验证码：{{code}}</div>
    </el-dialog>
    <div class="rightbar">
      <div class="bar-btn">
        <el-button type="primary" @click="print">打 印</el-button>
        <el-button type="primary" @click="deliver_report">发 送</el-button>
      </div>
      <el-button type="primary" @click="backSigning">回到首页</el-button>
    </div>
  </div>
</template>
<script>
import Plan from "./plan";
import html2canvas from "html2canvas";
export default {
  name: "healthGuidance",
  components: {
    Plan
  },
  data() {
    return {
      mobileTips: false,
      code: "",
      url: ""
    };
  },
  mounted() {},
  created() {
    this.$axios({
      method: "get",
      url: "/DHT/suggest_report",
      params: {
        id_card: this.$route.query.id_card
      },
      headers: { session: this.$store.state.session }
    }).then(res => {
      if (res.data.code != 200) alert(res.data.msg);
      else {
        this.$store.commit("setGuidance", res.data.data);
      }
    });
  },
  watch: {},
  computed: {},
  methods: {
    print() {
      let bdHtml = window.document.getElementById("printContent").innerHTML;
      window.document.body.innerHTML = bdHtml;
      window.print();
      window.location.reload();
      return false;
    },
    backSigning() {
      this.$router.push({
        path: "/signing"
      });
    },
    deliver_report() {
      this.$axios({
        method: "get",
        url: "/DHT/send_mission_code",
        params: {
          id_card: this.$route.query.id_card
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        if (res.data.code == 200) {
          this.mobileTips = true;
          this.url = res.data.data.url;
          this.code = res.data.data.code;
        }
      });
    }
  }
};
</script>
<style scoped>
body {
  background: rgba(229, 229, 229, 1);
}
.GuidanceContent {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 1%;
  height: 100%;
  font-size: 20px;
  background: rgba(229, 229, 229, 1);
}
#printContent {
  width: 66.5%;
  height: 100%;
  overflow: auto;
  background-color: white;
}
.planContent {
  width: 100%;
}
.rightbar {
  top: 0;
  width: 32.5%;
  height: 100%;
  background-color: white;
  margin-left: 20px;
}
.bar-btn {
  width: 150px;
  /* margin-left: 20px; */
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}
.rightbar .el-button {
  width: 200px;
  margin-left: 20px;
  background-color: #4eb7e5;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
}
.bar-btn .el-button {
  background-color: #4eb7e5;
  font-size: 20px;
  font-weight: bold;
  width: 90px;
  height: 40px;
}
</style>