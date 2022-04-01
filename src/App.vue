<template>
  <div id="app">
    <transition :name="animatName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      animatName: 'show',
    };
  },
  watch: {
    $route(newVal) {
      if (newVal.name === 'Search') {
        this.animatName = 'show';
      }
      if (newVal.name === 'Categories') {
        this.animatName = 'hide';
      }
    },
  },
};
</script>

<style lang="less">
*{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  outline:none;
}
.show-enter,
.hide-leave-to{
  transform: translate(100%, 0%);
}
.show-enter-to,
.hide-leave{
  transform: translate(0%, 0%);
}

.show-enter-active,
.hide-leave-active{
  transition: all 1s;
}
</style>
