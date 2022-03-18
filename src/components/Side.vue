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
import { mapState } from 'vuex';
import tool from '@/utils/tool';

export default {
  data() {
    return {
      move: false,
      index: 0,
    };
  },
  computed: {
    ...mapState(['sideBarList']),
  },
  mounted() {
    window.ce = this.$refs.Side;
  },
  methods: {
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
        console.log('=================');
        console.log(itemTop - sideHeight / 2 + itemHeight / 2);
        // console.log(itemTop + sideTop - sideHeight / 2 - itemHeight / 2);
        console.log('start', Side.scrollTop);
        tool.scroll(Side.scrollTop, itemTop - sideHeight / 2 + itemHeight / 2, Side, 'scrollTop');
        console.log('结束', Side.scrollTop);
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
