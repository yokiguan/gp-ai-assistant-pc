<template>
  <div>
    <span class="status">状态说明
        <br> &nbsp;&nbsp;：</span>
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
    line-height: 14px;
    margin-bottom:10px;
  }

  .mark {
    font-size:2.47mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(35, 37, 39, 1);
    line-height: 25px;
  }

</style>
