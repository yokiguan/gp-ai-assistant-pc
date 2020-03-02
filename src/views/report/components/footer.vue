<template>
  <div @click="go" class="footer">
    <div class="footer-text">返回</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    props:['msg'],
    methods:{
      go(){
         this.$router.back(-1)
      }
    }
  }

</script>

<style lang="scss" scoped>
.footer{
  z-index: 999;
  position: fixed;
  bottom:0;
  text-align: center;
  width:100vw;
  height: 5vh;
  bottom: 0;
  // line-height: 1.5rem;
  vertical-align: middle;
  font-size:1.2rem;
  background-color: rgb(226, 226, 226);
  .footer-text{
    bottom:0;
  }
}
</style>
