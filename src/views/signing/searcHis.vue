<template>
  <div class="signing">
    <div class="sign-title">
      <!-- <img src="../../assets/logo.png" class="logo" /> -->
      <p>慢病风险评估及健康生活管理计划</p>
    </div>
    <div class="sign-search">
      <el-input type="text" placeholder="请输入身份证号" v-model="id_card" />
      <div class="btn-group">
        <el-button type="primary" class="historysearch" @click="getData">查询his信息</el-button>
        <el-button type="primary" class="generate" @click="goGenerate">生成</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="show" width="80%" :modal-append-to-body="false">
      <div class="list">
        <div class="list-tab">
          <el-table border :data="historyList">
            <el-table-column
              label="时间"
              align="center"
              class-name="list-tab-body"
              prop="time"
              label-class-name="list-tab-title"
            ></el-table-column>

            <el-table-column
              label="舒张压"
              label-class-name="list-tab-title"
              align="center"
              prop="DBP"
              class-name="list-tab-body"
            ></el-table-column>

            <el-table-column
              label="收缩压"
              label-class-name="list-tab-title"
              align="center"
              prop="SBP"
              class-name="list-tab-body"
            ></el-table-column>

            <el-table-column
              label="诊断名称"
              label-class-name="list-tab-title"
              align="center"
              class-name="list-tab-body"
              prop="disease_detail"
            ></el-table-column>

            <el-table-column
              label="具体诊断"
              label-class-name="list-tab-title"
              class-name="list-tab-body"
              align="center"
              prop="disease_detail"
            ></el-table-column>

            <el-table-column
              label="药品名称"
              label-class-name="list-tab-title"
              class-name="list-tab-body"
              align="center"
              prop="medicine"
            ></el-table-column>

            <el-table-column
              label="药品数量"
              label-class-name="list-tab-title"
              class-name="list-tab-body"
              prop="medicine"
              align="center"
            ></el-table-column>

            <el-table-column
              label="药品单位"
              label-class-name="list-tab-title"
              class-name="list-tab-body"
              align="center"
              prop="medicine"
            ></el-table-column>

            <el-table-column
              label="规格"
              label-class-name="list-tab-title"
              class-name="list-tab-body"
              align="center"
              prop="medicine"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <span slot="footer">
        <el-button type="primary" @click="dialogTrue">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "searcHis",
  components: {},
  data() {
    return {
      id_card: "",
      show: false,
      historyList: []
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    dialogTrue() {
      this.show = false;
    },
    getData() {
      this.show = true;
      this.$axios({
        method: "get",
        url: "/DHT/his_info",
        params: {
          id_card: this.id_card
        },
        headers: { session: window.sessionStorage.getItem("session") }
      }).then(res => {
        this.historyList = res.data.data;
      });
    },
    goGenerate() {
      this.$axios({
        method: "get",
        url: "/DHT/generate_report",
        params: {
          id_card: this.id_card
        },
        headers: { session: this.$store.state.session }
      }).then(res => {
        if (res.data.code == 200) {
          this.$store.commit("setReport", res.data.data);
          this.$router.push({
            path: "/signing/report",
            query: {
              id_card: this.id_card
            }
          });
        } else {
          alert(res.data.msg);
        }
      });
    }
  }
};
</script>
<style>
.signing {
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sign-title {
  color: rgba(0, 110, 182, 1);
  font-size: 40px;
  font-weight: 500;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.sign-search {
  width: 721px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
}
.sign-search .el-input__inner {
  width: 720px;
  color: rgba(0, 110, 182, 1);
  border: rgba(0, 110, 182, 1) solid 1px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
}
.el-input__inner::-webkit-input-placeholder {
  color: rgba(0, 110, 182, 1);
}
.el-input__inner::-moz-input-placeholder {
  color: rgba(0, 110, 182, 1);
}
.el-input__inner::-ms-input-placeholder {
  color: rgba(0, 110, 182, 1);
}
.btn-group {
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 721px;
  justify-content: space-between;
  flex-direction: row;
}
.btn-group .el-button {
  width: 350px;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 110, 182, 1);
  border-radius: 4px;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  font-weight: bold;
}
p {
  width: 845px;
  height: 82px;
  color: rgba(0, 110, 182, 1);
  font-size: 55px;
  line-height: 150%;
  text-align: left;
  font-weight: bold;
}
.logo {
  width: 150px;
  height: 150px;
}
</style>