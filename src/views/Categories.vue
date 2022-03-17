<template>
  <div class="Categories">
    <div class="search-btn">
      <van-icon name="search" />
      <span>iphone13滞销</span>
    </div>
    <Onetab />
  </div>
</template>

<script>
import Onetab from '@/components/Onetab.vue';

export default {
  components: {
    Onetab,
  },
};
</script>

<style lang="less" scoped>
.Categories {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    margin: 11px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a1a1a1;
    background-color: #eee;
    font-size: 14px;
    border-radius: 11px;
  }
}
</style>
