<template>
    <div class="Productcard van-hairline--bottom">
            <div class="list-image">
                <img ref="img" :src="url[0] || noImage"/>
            </div>
            <div class="content">
                <p class="title">{{ title }}</p>
                <p class="describe">{{ describe }}</p>
                <div class="label">
                    <div v-for="n in label" :key="n">{{ n }}</div>
                </div>
                <div class="sub">
                    <span class="price">{{ price }}</span>
                    <div class="operate">
                        <div
                            class="rec"
                            v-if="num"
                            @touchend="changeNum(id, -1)"
                        >
                            <img
                                src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"
                            />
                        </div>
                        <div class="num" v-if="num">{{ num }}</div>
                        <div class="add" @touchend="changeNum(id, 1)">
                            <img
                                src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import noImage from '@/assets/noImage.png';
import animat from '@/tool/animat';

export default {
  data() {
    return {
      noImage,
    };
  },
  props: ['url', 'title', 'describe', 'label', 'price', 'id', 'num', 'anim'],
  methods: {
    ...mapMutations(['setSppoListStorage']),
    changeNum(id, num) {
      this.setSppoListStorage({ id, num });
      // 当前是减1 结束函数执行  或  不执行动画效果
      if (num === -1 || this.anim) {
        return;
      }
      const { img } = this.$refs;
      // 图片位置，宽高
      const {
        top: imgTop,
        left: imgLeft,
        width: imgWidth,
        height: imgHeight,
      } = img.getBoundingClientRect();
      const shoppingCart = document.querySelector(
        '#shopping-cart',
      );
      // 购物车位置
      const { top: endTop, left: endLeft } = shoppingCart.getBoundingClientRect();
      animat({
        imgTop,
        imgLeft,
        imgWidth,
        imgHeight,
        endTop,
        endLeft,
        src: img.src,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.overflow-hide {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 170px;
}
.Productcard {
    width: 100%;
    display: flex;
    height: 100px;
    .list-image {
        width: 90px;
        height: 90px;
        margin-right: 20px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .content {
        flex: 1;
        .title {
            font-size: 13px;
            margin-top: 5px;
            width: 170px;
            .overflow-hide();
            color: #1a1a1a;
        }
        .describe {
            font-size: 12px;
            margin-top: 5px;
            color: #aaa;
            .overflow-hide();
        }
        .label {
            margin-top: 4px;
            display: flex;
            .overflow-hide();
            div {
                color: #aaa;
                border-radius: 4px;
                border: 1px solid #aaa;
                font-size: 10px;
                padding: 2px;
                margin-right: 5px;
            }
        }
        .sub {
            // .overflow-hide();
            margin-top: 4px;
            margin-right: 8px;
            display: flex;
            justify-content: space-between;
            .price {
                color: #ff1a90;
                font-size: 14px;
                font-weight: 600;
            }
        }
        .operate {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div:not([class="num"]) {
                width: 16px;
                height: 16px;
                img {
                    width: 100%;
                }
            }
            .num {
                padding: 0 5px;
            }
        }
    }
}
</style>
