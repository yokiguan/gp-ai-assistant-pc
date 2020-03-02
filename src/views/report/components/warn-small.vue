<template>
  <div class="state">
    <img src="../../../assets/new/超标2x.png" alt="">
    <span class="mark">超标</span>
    <img src="../../../assets/new/正常2.png" alt="">
    <span class="mark">正常</span>
    <img src="../../../assets/new/低.png" alt="">
    <span class="mark">偏低</span>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .state{
    width: 0.8rem;
    vertical-align: middle;
    text-align: center;
    line-height: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img{
      display: block;
      height: 0.7rem;
      width: 0.7rem;
    }
  }
  .status {
    // writing-mode: vertical-lr;
    width: 0.8rem;
    vertical-align: middle;
    margin:0 auto;
    font-size:0.7rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 37, 39, 1);
    line-height: 0.8rem;
  }
  .mark {
    font-size:0.55rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 37, 39, 1);
  }

</style>
