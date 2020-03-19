<template>
  <div class="signing">
    <div class="sign-title">
      <!-- <img src="../../assets/logo.png" class="logo" /> -->
      慢病风险评估 · 健康生活管理
    </div>
    <div class="sign-search">
      <el-input type="text" placeholder="请输入身份证号" v-model="id_card" />
      <div class="btn-group">
        <el-button class="historysearch" @click="getData">查询门诊信息</el-button>
        <el-button class="generate" @click="goGenerate">生成</el-button>
      </div>
    </div>
    <el-dialog class='historyTable' :visible.sync="show" width="80%" :title='"患者："+name+period+"内门诊数据"' :modal-append-to-body="false">
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
      historyList: [],
      name:'',
      period:''
    };
  },
  created() {
    this.$store.commit('setisdeliver',false)
  },
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
        this.historyList = res.data.data.result_list;
        this.name=res.data.data.name;
        this.period=res.data.data.last_visit_period;
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
.historyTable .el-dialog .el-dialog__body{
  padding-top:0px !important
}
.historyTable td, .historyTable th.is-leaf{
  background: rgba(78, 183, 229, 1);
  color:white;
  height: 40px;
}
.signing {
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background:linear-gradient(90deg, rgb(177,239,235), rgb(198,207,240));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sign-title {
  color: rgba(78, 183, 229, 1);
  font-size: 60px;
  font-weight: 900;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.sign-search {
  width: 805px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
}
.sign-search .el-input .el-input__inner {
  width: 805px;
  height: 60px;
  color: rgba(78, 183, 229, 1) !important;
  border-radius: 12px;
  font-size: 18px;
  font-weight:bold;
  text-align: center;
}
.el-input__inner::-webkit-input-placeholder {
  color: rgba(78, 183, 229, 1) !important;;
}
.el-input__inner::-moz-input-placeholder {
  color: rgba(78, 183, 229, 1) !important;
}
.el-input__inner::-ms-input-placeholder {
  color: rgba(78, 183, 229, 1) !important;
}
.btn-group {
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 805px;
  justify-content: space-between;
  flex-direction: row;
}
.btn-group .el-button {
  width: 395px;
  height: 60px;
  color: rgba(255, 255, 255, 1);
  background-color:rgba(78, 183, 229, 1);
  border-radius: 12px;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  font-weight: bold;
}

.logo {
  width: 150px;
  height: 150px;
}
</style>