<template>
    <div v-bind:id=id v-bind:data=data>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/vintage.js'
import dom2image from 'dom-to-image'
export default {
  name:'baseEcharts',
  data(){
    return{
      ChartLineGraph:null,
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
    setTimeout(this.toImage(this.id),500);
  },
  methods:{
    draw(id,data){
      let _this = this;
      let myChart = document.getElementById(id)
      this.ChartLineGraph = echarts.init(myChart,'vintage')
      this.ChartLineGraph.setOption(data);
      // window.addEventListener("resize",function () {
      //   _this.ChartLineGraph.resize();
      // })
    },
    toImage(id) {
        dom2image
          .toPng(document.getElementById(id), {
            quality: 1,
            // bgcolor: "white"
          })
          .then(function(dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            document.getElementById(id).parentNode.replaceChild(img,document.getElementById(id))
          })
          .catch(function(error) {
            console.error("oops, something went wrong!", error);
          });
    },
  },
  beforeDestroy(){
    if(this.ChartLineGraph){
      this.ChartLineGraph.clear();
    }
  }
}
</script>