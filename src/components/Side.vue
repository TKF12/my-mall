<template>
  <div class="Side" ref="Side">
      <div
        v-for="(n, i) in sideBarList"
        :key="n"
        :class="{active: i === index}"
        @touchstart="move = false"
        @touchmove="move = true"
        @touchend="changeTou($event, i)">
          {{typeof n === 'number' ? '全部' : n}}
      </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import tool from '@/utils/tool';

export default {
  computed: {
    ...mapState(['sideBarList']),
  },
  data() {
    return {
      move: false,
      index: 0,
    };
  },
  watch: {
    // 二级导航栏数据变化选中第一个
    sideBarList(){
      this.index = 0;
    }
  },
  methods: {
    ...mapMutations(['setListItem', 'setFinished', 'setGoodsList']),
    ...mapActions(['getGoodsList']),
    changeTou(e, i) {
      if (!this.move) {
        this.index = i;
        // 父元素
        const { Side } = this.$refs;
        // 父元素top
        // const sideTop = Side.offsetTop;
        // 子元素高度
        const sideHeight = Side.offsetHeight;
        // 子元素top
        const itemTop = e.target.offsetTop;
        // 子元素高度
        const itemHeight = e.target.offsetHeight;

        // console.log('=================');
        // console.log(itemTop - sideHeight / 2 + itemHeight / 2);
        // console.log(itemTop + sideTop - sideHeight / 2 - itemHeight / 2);
        // console.log('start', Side.scrollTop);
        tool.scroll(Side.scrollTop, itemTop - sideHeight / 2 + itemHeight / 2, Side, 'scrollTop');
        // console.log('结束', Side.scrollTop);
        // 清空商品列表
        this.setGoodsList([]);
        // 设置页码为1
        this.setListItem({ page: 1 });
        // 设置当前点击的类型
        this.setListItem({ type: this.sideBarList[this.index] });
        // 获取商品
        this.getGoodsList().then(() => {
          // 设置商品没有全部加载完
          this.setFinished(false);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Side{
    position: fixed;
    left: 0;
    top: 138px;
    width: 79px;
    overflow: auto;
    bottom: 1.333333rem;
    background-color: #f8f8f8;
    div{
        font-size: 12px;
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        position: relative;
    }
    .active{
        color: #ff1a90;
        font-weight: bold;
        &::after{
            content: '';
            position: absolute;
            display: block;
            top: calc(50% - 9px);
            left: 0px;
            width: 6px;
            height: 18px;
            background-color: #ff1a90;
        }
    }
    &::-webkit-scrollbar{
        display: none;
    }
}
</style>
