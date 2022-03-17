<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{name: 'Categories'}" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item :to="{name: 'Commoditycart'}" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style>

</style>
