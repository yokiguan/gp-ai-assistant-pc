<template>
<div class="module-container">
  <div class="header">
    <div class="logo">
      <img src="../../../assets/logo.png"/>
    </div>
    <div class="company">见道科技</div>
    <div class="bar">
      <div class="info">
        <span>姓名：</span><span>{{name}}</span><span>&nbsp;|&nbsp;随访时间&nbsp;</span><span>{{date}}</span>
      </div>
      <div class="progress"></div>
    </div>
  </div> 
  <Title></Title>
</div>
</template>

<script>
import Title from './title'
  export default {
    props: {
      name:'',
      date:''
    },components:{
      Title
    }
  }

</script>

<style lang="scss" scoped>
.module-container {
  width: 230mm;
  padding: 0;
  word-break: break-all;
  vertical-align: middle;
  margin: 0 auto;
}
.header{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width:100%;
  vertical-align: bottom;
  margin:0 auto;
  .logo {
    width: 20mm;
    height: 20mm;
    img{
      width: 20mm
    }
  }
}
  .bar{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .progress {
    height:12px;
    width: 140mm;
    opacity: 0.3;
    background: -webkit-repeating-linear-gradient(-45deg, #555 0, #555 0.05rem, #fff 0.1rem, #fff 4px);
    position: relative;
  }

  .company {
    margin-left:2mm;
    margin-right:2mm;
    font-size: 5mm;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(132, 131, 145, 1);
  }

  .info {
    float: right;
    height: 20px;
    text-align: center;
    width:250px;
    font-size:14px;
    background: rgba(230, 242, 255, 1);
    border-radius: 0.3rem;
  }

</style>
