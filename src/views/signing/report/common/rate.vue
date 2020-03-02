<template>
    <div>
        <div class="rates">
            <span class="rate" :style="{width:49.6*rate+'mm'}"></span>
            <span class="rateText">{{rate*100}}%</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        rate:{default:Number}
    }
}
</script>

<style scoped>
    .rates{
        width:49.6mm;
        height: 3.2mm;
        background-color:#D0E7FF;
        white-space: nowrap;
    }
    .rate{
        background-color:#5E92C7;
        width:49.6mm;
        display: inline-block;
        height:3.2mm;
    }
    .rateText{
        display: inline-block;
        color:#5E92C7;
        font-size:2.12mm;
        transform: scale(0.8);
        transform-origin: 0 0;
        vertical-align:top;
    }
</style>