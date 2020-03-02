<template>
  <div class="top">
    <div class="top-L">
      <img src="@/assets/logo.png" />
      <span class="title">见道科技————智能评估报告</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'top',
  props: {
    left: {
      type: String,
      default: '',
    },
  },
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
}
</script>
<style lang="css">
.top{
  width:100%;
  height: 8vh;
  font-size:15px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
}
.top-L{
  width:400px;
  height:8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.top-L img{
  margin-right:25px;
  width:45px;
}
.top-L .title{
  color:rgba(80, 80, 80, 1);
  font-size:18px;
  font-weight:bold;
  margin-right:25px;
}
</style>