<template>
  <el-container class="content">
    <el-aside> 
      <div class="subtitle">
      <div class="subtext">
      <slot name="subtitle"></slot>
      </div>
      </div>
    </el-aside>
    <el-main class="subcontent">
        <slot name="subcontent"></slot>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  component:{
    
  }
}
</script>
<style lang="scss">
.content{
  display: table;
  width: 220mm; 
  margin-bottom: 8px;
  .el-main{
    padding: 10px
  }
  .subtitle{
    border-radius: 25px;;
    width:30px;
    padding: 5px;
    display: table-cell;
    background: rgba(94, 146, 199, 1);
    text-align: center;
  }
  .subtext{ 
    color: white;
    width: 30px;  
    margin: 0 auto;  
    line-height: 23px;  
    font-size: 25px;
    writing-mode: vertical-lr;
    font-weight: bolder;
    word-wrap:break-word;
    word-break: break-all;
  }
  .subcontent{
  display: table-cell;
  vertical-align: middle;
}
}

</style>