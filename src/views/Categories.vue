<template>
    <div class="Categories">
        <router-link class="search-btn" tag="div" :to="{ name: 'Search' }">
            <van-icon name="search" />
            <span>iphone13滞销</span>
        </router-link>
        <Onetab />
        <Side />
        <template v-if="isLoading">
            <van-loading size="1.3rem" vertical />
        </template>
        <template v-else>
            <Productlist />
        </template>
    </div>
</template>

<script>
import Onetab from '@/components/Onetab.vue';
import Side from '@/components/Side.vue';
import Productlist from '@/components/Productlist.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isLoading']),
  },
  components: {
    Onetab,
    Side,
    Productlist,
  },
};
</script>

<style lang="less" scoped>
.Categories {
    width: 375px;
    height: 100vh;
    position: absolute;
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
