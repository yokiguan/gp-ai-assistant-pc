<template>
  <div class="header">
    <div class="logo">
      <img src="../../../assets/logo.png"/>
    </div>
    <div class="company">见道科技</div>
    <div class="bar">
      <div class="info">
        <span>姓名：</span><span>{{name}}</span><span>&nbsp;|&nbsp;报告时间&nbsp;</span><span>{{date}}</span>
      </div>
      <div class="progress"></div>
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
.header{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
  vertical-align: bottom;
  .logo {
    width: 6vw;
    padding: 0 0 0 0;
    img{
      width: 6vw;
    }
  }
}
  .bar{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .progress {
    height: 2vw;
    width: 73vw;
    opacity: 0.3;
    background: -webkit-repeating-linear-gradient(-45deg, #555 0, #555 0.05rem, #fff 0.1rem, #fff 4px);
    position: relative;
  }

  .company {
    font-size: 0.8rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(132, 131, 145, 1);
    margin-left: 0.3rem;
    margin-right: 0.5rem;
  }

  .info {
    float: right;
    height: 1rem;
    text-align: center;
    width:30vw;
    font-size:0.7rem;
    background: rgba(230, 242, 255, 1);
    border-radius: 0.3rem;
  }

</style>
