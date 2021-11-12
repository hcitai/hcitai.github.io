<template>
<!-- 根据屏幕宽度大小来渲染不同的页面 -->
  <div>
    <slot name="a" v-if="currentWidth > width" />
    <slot name="b" v-else />
  </div>
</template>
<script>
export default {
  props: {
    width: Number,
  },
  data: () => ({
    currentWidth: document.body.clientWidth, //网页可见区域宽
  }),
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.currentWidth = document.body.clientWidth;
    },
  },
};
</script>
