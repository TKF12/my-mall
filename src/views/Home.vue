<template>
  <div class="Home">
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';

export default {
  components: {
    Tabbar,
  },
};
</script>

<style>
.Home{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 1s linear;
}
p{
  margin: 0;
}
</style>
