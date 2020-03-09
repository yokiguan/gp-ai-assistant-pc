<template>
  <div class="bottom">
    <div class="bottom-text">技术支持：见道（杭州）科技有限公司</div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  props: {
    left: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="css">
.bottom {
  width: 100%;
  height: 5vh;
  margin-top:2vh;
  padding: 0 24px;
  box-sizing: border-box;
  background: white;
}
.bottom-text {
    text-align: center;
    font-size: 12px;
    color: #3e4a59;
    line-height: 5vh;
}
</style>