<template>
  <div>
    <div class="logo">
      <!-- <div style="height:5mm;"> </div> -->
      <img class="image" src="../../../../assets/new/logo.png" style="width:17mm;height:17mm;" alt="">
      <span class="company">见道科技</span>
      
      <div class="info">
        <div class="msg">
          <span>姓名：</span><span>{{name}}</span><span>&nbsp;|&nbsp;报告时间&nbsp;</span><span>{{date}}</span>
        </div>
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
        name:'',
        date:''
    }
  }

</script>

<style scoped>
  .logo {
    /* position: relative; */
    margin-top: 11mm;
    margin-bottom:5mm;
    display: flex;
    flex-direction: row;
    align-items: flex-end
  }
  .progress {
    display: inline-block;
    width: 165mm;
    height: 2.5mm;
    opacity: 0.5;
    background: -webkit-repeating-linear-gradient(-45deg, #555 0px, #555 1px, #fff 1px, #fff 4px);
  }

  .image {
    vertical-align: bottom;
  }

  .company {
    font-size: 4.39mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(132, 131, 145, 1);
    margin-left: 2mm;
    margin-right:2mm;
    min-width: 20mm;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end
  }
  .info .msg{
    width:50mm;
    height: 5mm;
    background: rgba(230, 242, 255, 1);
    border-radius: 13px;
    font-size:3.4mm;
    font-family: Microsoft YaHei;
  }
</style>
