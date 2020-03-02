<template>
  <div>
    <div class="demo" :style="{background:color,height:height}">
      <span class="text" >
        {{headline}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
      props:{
          headline:'',
          color:'',
          height:''
      }
  }

</script>

<style scoped>
  .demo {
    width:7.1mm;
    border-radius: 21px;
    line-height: 16px;
    text-align: center;

  }
    .demo::before{
        content:'';
        display: table;
    }
  .text {
      /* margin-left:1.4mm; */
      display: block;
      margin-top:2.4mm;
    word-wrap: break-word;
    /* width: 26px; */
    font-size: 4.23mm;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

</style>
