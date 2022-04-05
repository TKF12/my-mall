<template>
  <div class="Commoditycart">
    <div class="header">
      <van-nav-bar
        title="购物车"
        right-text="删除"
        @click-right="del"
      />
    </div>
    <div class="card-group">
      <van-checkbox-group
        class="card"
        ref="checkboxGroup"
        v-model="result">
          <div class="card-box" v-for="item in list" :key="item.id">
              <van-checkbox class="card-check" :name="item.id"></van-checkbox>
              <Productcard
                :url="item.images"
                :key="item.id"
                :title="item.title"
                :describe="item.desc"
                :label="item.tags"
                :price="item.price"
                :id="item.id"
                :anim="true"
                :num="sppoListStorage[item.id]" />
          </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      class="settlement"
      :price="getPrice"
      :button-text="`结算(${getTotal})`"
      tip-icon="info-o"
      @submit="onSubmit"
    >
    <van-checkbox v-model="checked" @click="onCheck">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { Dialog } from 'vant';
import api from '@/api/goods';
import Productcard from '@/components/Productcard.vue';

export default {
  components: {
    Productcard,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      // 选中的商品id
      result: [],
      // 商品数量
      list: [],
      checked: false,
    };
  },
  computed: {
    ...mapState(['sppoListStorage']),
    getTotal() {
      // 获取已选中的商品
      const filArr = this.list.filter((item) => this.result.includes(item.id));
      // 获取已选中的商品数量
      const total = filArr.reduce((newVal, val) => newVal + (this.sppoListStorage[val.id] || 0), 0);
      return total;
    },
    getPrice() {
      const filArr = this.list.filter((item) => this.result.includes(item.id));
      const totalPrice = filArr.reduce((newVal, val) => {
        // 选中商品的数量
        const num = this.sppoListStorage[val.id] || 0;
        return (Math.round((val.price * num) * 100) + newVal);
      }, 0);
      return totalPrice;
    },
  },
  watch: {
    result() {
      // 选中列表为空 则不全选
      if (!this.result.length) {
        this.checked = false;
        return;
      }
      // 监听当前选中的数量 不等于 商品列表数量 则不全选
      if (this.result.length !== this.list.length) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    },
  },
  methods: {
    ...mapMutations(['setSppoListStorage']),
    onSubmit() {

    },
    onCheck() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    del() {
      Dialog.confirm({
        message: '是否删除已选择的商品',
      }).then(() => {
        // 删除当前选中的本地存储
        this.result.forEach((id) => {
          this.setSppoListStorage({ id, num: 'del' });
        });
        this.list = this.list.filter((item) => !this.result.includes(item.id));
        this.result = Object.keys(this.sppoListStorage);
        this.$refs.checkboxGroup.toggleAll(false);
      });
    },
    getByIds() {
      // 获取所有本地商品id 并拼接成 1,2 形式
      const shopKes = Object.keys(this.sppoListStorage).join();
      // 获取商品信息
      api.getGoodsByIds({ value: shopKes }).then((data) => {
        this.list = data.list;
      });
    },
  },
  created() {
    this.getByIds();
  },
};
</script>

<style lang="less" scoped>
.Commoditycart{
  width: 100vw;
  .card-group{
    width: 100vw;
    position: fixed;
    overflow-y: auto;
    top: 50px;
    left: 0;
    bottom: 100px;
    .card{
      .card-box{
        display: flex;
      }
      // display: flex;
      .card-check{
        padding: 0 10px;
      }
    }
  }
  .settlement{
    bottom: 50px !important;
  }
}
</style>
