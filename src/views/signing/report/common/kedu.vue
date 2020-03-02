<template>
    <div style="height:7mm;">
        <div class="outLine">
            <div class="blockUl">
            </div>
            <ul class="num">
                <li>0</li>
                <li>10</li>
                <li>20</li>
                <li>30</li>
                <li>40</li>
                <li>50</li>
                <li>60</li>
                <li>70</li>
                <li>80</li>
                <li>90</li>
                <li style="margin-left:19px;">100</li>
            </ul>
            <ul class="white">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="range" :style="{width:width+'mm',left:left+'mm'}">       
            </div>
            <div class="cursor" :style="{left:num*33+'px'}">
                <img src="../../../../assets/new/cursor.png" style="width:2mm;height:4mm;" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        width:{default:Number},
        left:{default:Number},
        num:{default:Number}
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    .outLine{
        width:90mm;
        height:2.7mm;
        display: inline-block;
        position: relative;
        margin-left:15px;
         background-color:#E6E2F3;
    }
    .outLine .num{
        position: absolute;
        top:11px;
        left:-23px;
        transform: scale(0.7);
        transform-origin: 0 0;
        white-space: nowrap;
    }
    .outLine .num li{ 
        display:inline-block;
        margin-left:31px;
    }
    .outLine .range{
        height:2.7mm;
        background-color:#8F82BC;
        position: absolute;
    }
    .outLine .white{
        position: absolute;
        top:0px;
        left:0px;
        z-index: 3;
    }
    .outLine .white li{
        /* display: inline-block; */
        float: left;
        width:2px;
        margin-left:32px;
        height:2.7mm;
        background-color:white;
    }
    .outLine .cursor{
        position: absolute;
        top:-3px;
        z-index:999;
    }
</style>