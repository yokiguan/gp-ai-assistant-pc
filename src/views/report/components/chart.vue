<template>
  <div v-bind:id=id v-bind:data=data>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/vintage.js'
export default {
  name:'baseEcharts',
  data(){
    return{
      ChartLineGraph:null,
      src:''
    }
  },
  watch:{
    data:{
      handler(newVal,oldVal){
        this.draw(this.id,newVal)
      },
      deep:true
    },
  },
  props:["id","data"],
  mounted(){
    this.draw(this.id,this.data);
  },
  methods:{
    draw(id,data){
      let _this = this;
      let myChart = document.getElementById(id)
      this.ChartLineGraph = echarts.init(myChart,'vintage')
      this.ChartLineGraph.setOption(data);
      window.addEventListener("resize",function () {
        _this.ChartLineGraph.resize();
      })
    }
  },
  beforeDestroy(){
    if(this.ChartLineGraph){
      this.ChartLineGraph.clear();
    }
  }
}
</script>