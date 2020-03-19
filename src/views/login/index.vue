<template>
  <div class="login">
    <img src="../../assets/bg.png" class="login-bj" />
    <el-col :span="12" class="tech-title">家庭医生 · 慢病生活管理智能助手</el-col>
    <el-col :span="12" class="content">
      <div class="login-title">欢迎使用家庭医生 · 慢病生活管理智能助手，请登录</div>
      <div class="login-input">
        <el-input v-model="number" placeholder="请输入用户名" />
      </div>
      <div class="login-input">
        <el-input v-model="password" placeholder="请输入密码" type="password" />
      </div>
      <div class="login-botton">
        <el-button @click="login">登 录</el-button>
      </div>
    </el-col>
    <el-row class="tech-right">技术支持：见道（杭州）科技有限公司</el-row>
    <img src="../../assets/di.png" class="login-di" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapAction } from "vuex";
export default {
  name: "login",
  components: {},
  data() {
    return {
      number: "",
      password: "",
      radio: "2"
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    login() {
      this.$axios({
        method: "post",
        url: "/DHT/login",
        data: {
          doctorId: this.number,
          password: this.password
        }
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$store.commit('setName',res.data.name)
          this.$store.commit("setdocId", this.number);
          this.$store.commit("setSession", res.headers.session);
          console.log("session",window.sessionStorage.getItem('session'))
          this.$router.push({
                path: "/signing",
                // query: {
                //   session: this.$store.state.session
                // }
              });
          
        }else{alert(res.data.msg)}
      });
    }
  }
};
</script>

<style lang="css">
body{
  font-family: Microsoft YaHei;
}
.login-di{
  margin-top:90px;
  width: 409px;
  vertical-align: middle;
  transform: translate(-50%, 0);
  margin-left:50%;
}
.login-bj{
  width: 100%;
  height: 65%
}
.tech-title{
  position: fixed;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  /* text-align: center; */
  color:white;
  font-weight: bolder;
  font-size:45px;
}
.tech-right{
  position: fixed;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color:rgba(78, 183, 229, 1);
  font-weight: bolder;
  font-size:16px;
}
.content {
  position: fixed;
  top:55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
  background: white;
  box-shadow: 0px 8px 50px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom: 40px;
}
.login-title {
 width: 85%;
  color: #666666;
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0 10px 0;
}
.login-input {
  width: 85%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 5px;
}
.login-input .el-input .el-input__inner{
  height: 45px;
  border-radius: 4px;
  font-size: 16px;
  color:rgba(0, 110, 182, 1)
}
.login-botton {
  margin-top: 25px;
  font-size: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.login-botton .el-button {
  text-align: enter;
  margin:0 auto;
  width: 85%;
  height: 45px;
  color:white !important;
  font-weight: bolder;
  background-color: rgba(78, 183, 229, 1);
}
.login {
  height: 100%;
  width: 100%;
  background-color: white;
  /* display: flex; */
}
.el-input__inner::-webkit-input-placeholder {
  color: rgba(78, 183, 229, 1);
}
.el-input__inner::-moz-input-placeholder {
  color: rgba(78, 183, 229, 1);
}
.el-input__inner::-ms-input-placeholder {
  color: rgba(78, 183, 229, 1);
}
</style>
