<template>
    <div class="Productlist van-hairline--top-bottom">
        <div class="head">
            <ul>
                <li
                    :class="{ active: type === 'all' }"
                    @touchend="changeType('all')"
                >
                    综合
                </li>
                <li
                    :class="{ active: type === 'sale' }"
                    @touchend="changeType('sale')"
                >
                    销量
                </li>
                <li
                    :class="{'price-up': type === 'price-up', 'price-down': type === 'price-down'}"
                    @touchend="changeType('sort')"
                >
                    价格
                </li>
            </ul>
        </div>
        <div class="card">
            <van-pull-refresh
                v-model="isLoading"
                @refresh="onRefresh"
                head-height="70"
                success-text="刷新成功">
                <van-list
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  :immediate-check='true'
                  @load="onLoad">
                  <Productcard
                      v-for="n in sppoList"
                      :url="n.images"
                      :key="n.id"
                      :title="n.title"
                      :describe="n.desc"
                      :label="n.tags"
                      :price="n.price"
                      :id="n.id"
                      :num="sppoListStorage[n.id]"
                  />
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import Productcard from '@/components/Productcard.vue';

export default {
  components: {
    Productcard,
  },
  computed: {
    ...mapState(['sppoList', 'listInfo', 'sppoListStorage']),
  },
  data() {
    return {
      // 显示类型
      type: 'all',
      laside: true,
      isLoading: false,
      loading: false,
      // 数据是否全部加载完
      finished: false,
      page: 0,
    };
  },
  watch: {
    'listInfo.type': function () {
      this.setGoodsList([]);
      this.page = 0;
      this.getGoodsList({ page: 1 }).then(() => {
        this.finished = false;
      });
      // if (this.sppoList.length === 0 && this.listInfo.total === 0) {
      //   this.finished = true;
      // }
      // this.loading = false;
    },
  },
  methods: {
    ...mapMutations(['setListItem', 'setGoodsList']),
    ...mapActions(['getGoodsList']),
    // 刷新
    onRefresh() {
      this.page = 0;
      // 设置当前页码为1
      this.setGoodsList([]);
      // 获取数据
      this.getGoodsList({ sort: this.type, page: 1 }).then(() => {
        // 刷新完成
        this.isLoading = false;
        // 设置商品没有全部加载完
        this.finished = false;
      });
    },
    onLoad() {
      console.log('onload');
      // 商品全部加载完成不执行后面的代码
      if (this.finished) {
        return;
      }
      // this.page = 1;
      // 获取下一页数据
      this.getGoodsList({ page: this.page += 1 }).then(() => {
        this.loading = false;
        // 商品数量大于等于总数，设置商品全部加载完
        if (this.sppoList.length >= this.listInfo.total) {
          this.finished = true;
          // this.setFinished(true);
        }
      });
    },
    changeType(newtype) {
      this.page = 0;
      this.setGoodsList([]);
      if (newtype === 'sort') {
        if (this.type === 'price-up') {
          this.type = 'price-down';
        } else {
          this.type = 'price-up';
        }
      } else {
        this.type = newtype;
      }
      this.setListItem({ sort: this.type });
      this.getGoodsList({ page: 1 });
      this.finished = false;
    },
  },
};
</script>

<style lang="less" scoped>
.acColor{
  color: #ff1a90;
  font-weight: bold;
}
.Productlist {
    width: 296px;
    position: absolute;
    right: 0;
    bottom: 50px;
    top: 138px;
    .head {
        width: 296px;
        height: 25px;
        ul {
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            li {
                width: 50px;
                text-align: center;
                color: #cecece;
                &:last-child {
                    &:before,
                    &:after {
                        position: absolute;
                        top: 4px;
                        right: 1px;
                        z-index: 2;
                        content: "";
                        display: block;
                        width: 0;
                        height: 0;
                        border: 4px solid transparent;
                    }
                    &:before {
                        border-bottom-color: #aaa;
                    }
                    &:after {
                        top: 14px;
                        border-top-color: #aaa;
                    }
                }
            }
            .active {
              .acColor();
            }
            .price-up {
                .acColor();
                &:before {
                    border-bottom-color: #ff1a90 !important;
                }
            }
            .price-down {
                .acColor();
                &::after {
                    border-top-color: #ff1a90 !important;
                }
            }
        }
    }
    .card {
        position: fixed;
        overflow-y: auto;
        top: 163px;
        bottom: 50px;
        right: 0;
        width: 296px;
        bottom: 50px;
        // width: 296px;
        // position: absolute;
        // top: 163px;
        // right: 0;
        .van-pull-refresh{
          overflow: unset!important;
        }
    }
}
</style>
