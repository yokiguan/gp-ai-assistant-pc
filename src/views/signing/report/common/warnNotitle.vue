<template>
  <div style="width:8mm;height:15mm;text-align:center;">
    <img style="width:5mm;height:5mm;" src="../../../../assets/new/超标2x.png" alt="">
    <span class="mark">超标</span>
    <img style="width:5mm;height:5mm;" src="../../../../assets/new/正常2.png" alt="">
    <span class="mark">正常</span>
    <img style="width:5mm;height:5mm;" src="../../../../assets/new/低.png" alt="">
    <span class="mark">偏低</span>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .status {
    text-align: center;
    display: block;
    width:6mm;
    font-size:2.47mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 37, 39, 1);
    line-height: 10px;
    margin-bottom:0px;
  }

  .mark {
    font-size:2.47mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 37, 39, 1);
    line-height: 10px;
    transform: scale(0.9);
  }

</style>
