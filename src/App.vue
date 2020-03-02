<template>
  <div id="app">
    <router-view v-if='$route.meta.router == "login"||$route.meta.router == "sign"'></router-view>
    <div class="app-body" v-else>
    <lTop></lTop>
    <router-view/>
  </div>
  </div>
</template>

<script>
import lTop from './components/top'
export default {
  name: 'App',
  components: {lTop}
}
</script>

<style>
body{
  width:100vw;
  overflow-x: hidden
}
.el-main{
  padding: 0
}
.el-header{
  margin: 0 0 3vh ;
}
.app-body{
  width:100vw;
  overflow:auto;
  overflow-x: hidden
}
html{
  height: 100vh;
  width: 100vw;
}
body{
  height: 100vh;
  width: 100vw;
  margin:0;
  padding:0;
  /* background-color: rgba(229, 229, 229, 1); */
}
#app{
  height: 100%;
  width: 100%;
  background-color: rgba(229, 229, 229, 1);
}
.app-body{
  height: 100%;
  width: 100%;
}
</style>
