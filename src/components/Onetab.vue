<template>
  <div class="Onetab" ref="Onetab">
      <div class="item"
        :class="{active: i === activeNumber}"
        v-for="(n, i) in list"
        :key="n.title"
        @touchend="changeTou($event, i)"
        @touchstart="move = false"
        @touchmove="move = true"
        >
          <div class="item-img">
            <img :src="n.imgURL">
          </div>
          <p>{{n.title}}</p>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import tool from '@/utils/tool';

export default {
  data() {
    return {
      move: false,
      activeNumber: 0,
      list: [
        {
          title: '时令水果',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL: 'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ],
    };
  },
  created() {
    // 获取二级导航栏
    this.getBarList(this.list[this.activeNumber].title);
  },
  methods: {
    ...mapActions(['getBarList']),
    changeTou(e, i) {
      const { Onetab } = this.$refs;
      // 没有移动
      if (!this.move) {
        this.activeNumber = i;
        // 当前选中元素的left
        const itemLeft = e.target.getBoundingClientRect().left;
        // 当前选中选中width
        const itemWidth = e.target.offsetWidth;
        // 父级width
        const parenWidth = this.$refs.Onetab.clientWidth;
        const changeDisX = itemLeft - parenWidth / 2 + itemWidth / 2;

        // this.moveTo(Onetab.scrollLeft, changeDisX);
        tool.scroll(Onetab.scrollLeft, changeDisX, Onetab, 'scrollLeft');

        // 设置二级导航栏
        this.getBarList(this.list[i].title);
      }
    },
    // moveTo(start, end) {
    //   let dis = 0;
    //   // 加速度
    //   let speed = 5;
    //   if (end < 0) {
    //     speed *= -1;
    //   }
    //   const t = setInterval(() => {
    //     dis += speed;
    //     // 每次起始位置加 5
    //     this.$refs.Onetab.scrollLeft = start + dis;
    //     // 当前位置大于 目标位置清除定时器
    //     if (Math.abs(dis) >= Math.abs(end)) {
    //       this.$refs.Onetab.scrollLeft = start + end;
    //       clearInterval(t);
    //     }
    //   }, 2);
    // },
  },
};
</script>

<style lang="less" scoped>
.Onetab {
    width: 375px;
    height: 94px;
    display: flex;
    overflow: auto;
    .item{
        width: 50px;
        height: 70px;
        margin-top: 10px;
        text-align: center;
        border-radius: 23px;
        margin-left: 10px;
        background-color: #fff;
        .item-img{
            width: 50px;
            height: 50px;
            border-radius: 23px;
            border: 2px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
        }
        p{
            font-size: 12px;
            border-radius: 30px;
            margin-top: 2.5px;
        }
    }
    .active{
        .item-img{
            border-color: #d13193;
        }
        p{
            color: #fff;
            font-weight: bold;
            background-color: #d13193;
        }
    }
    &::-webkit-scrollbar{
        display: none;
    }
}
</style>
