<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{name: 'Categories'}" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item
      :to="{name: 'Commoditycart'}"
      icon="shopping-cart-o"
      :badge="badge">
      购物车
      </van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    ...mapState(['sppoListStorage']),
    badge() {
      const num = Object.values(this.sppoListStorage).reduce((item, newitem) => item + newitem, 0);
      return num > 99 ? '99+' : num;
    },
  },
};
</script>

<style>

</style>
