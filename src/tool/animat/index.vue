<template>
  <div class="imgItem" v-if="show" :style="{
      width: imgWidth + 'px',
      height: imgHeight = 'px',
      opacity,
      transform: `translate(${imgLeft}px, ${imgTop}px)`
  }">
      <img :src="src">
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.endLeft, this.endTop);
  },
};
</script>

<style scoped lang="less">
.imgItem {
    position: absolute;
    transition: all 1s;
    z-index: 100;
    top: 0;
    left: 0;
    perspective-origin: 0 0;
    img{
        border-radius: 50%;
        width: 100%;
    }
}
</style>
