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
                  offset="5"
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
                      @changeNum="dleLen"
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
      isLoading: false,
      loading: false,
      // 数据是否全部加载完
      finished: false,
      page: 0,
    };
  },
  destroyed() {
    // 组件销毁清空商品列表
    this.setGoodsList([]);
  },
  watch: {
    'listInfo.type': function () {
      this.setGoodsList([]);
      this.finished = false;
      this.page = 0;
      this.onLoad();
    },
  },
  methods: {
    ...mapMutations(['setListItem', 'setGoodsList', 'setSppoListStorage']),
    ...mapActions(['getGoodsList']),
    // 刷新
    onRefresh() {
      this.page = 0;
      // 清空商品列表
      this.setGoodsList([]);
      // 设置加载状态完成
      this.isLoading = false;
      this.finished = false;
      this.onLoad();
    },
    dleLen(id, num) {
      this.setSppoListStorage({ id, num });
    },
    async onLoad() {
      // 商品全部加载完成不执行后面的代码
      if (this.finished) {
        return;
      }
      // 显示加载状态
      this.loading = true;
      this.page += 1;
      // 获取下一页数据
      await this.getGoodsList({ page: this.page });
      // 取消加载状态
      this.loading = false;
      // 商品数量大于等于总数，设置商品全部加载完
      if (this.sppoList.length >= this.listInfo.total) {
        this.finished = true;
      }
    },
    changeType(newtype) {
      this.page = 0;
      // 清空商品列表
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
      this.finished = false;
      // 设置排序方式
      this.setListItem({ sort: this.type });
      this.onLoad();
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
