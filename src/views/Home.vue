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
p{
  margin: 0;
}
</style>
