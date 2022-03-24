<template>
    <div class="Productlist van-hairline--top-bottom">
        <div class="head">
            <ul>
                <li
                    :class="{ active: index === 0 }"
                    @touchend="changeType('all')"
                >
                    综合
                </li>
                <li
                    :class="{ active: index === 1 }"
                    @touchend="changeType('sales')"
                >
                    销量
                </li>
                <li
                    :class="[index === 2 ? 'active' : '', sort]"
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
                  :immediate-check='false'
                  @load="onLoad">
                  <Productcard
                      v-for="n in sppoList"
                      :url="n.images"
                      :key="n.id"
                      :title="n.title"
                      :describe="n.desc"
                      :label="n.tags"
                      :price="n.price"
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
    ...mapState(['sppoList', 'listInfo', 'finished']),
  },
  data() {
    return {
      index: 0,
      sort: '',
      laside: true,
      isLoading: false,
      loading: false,
      // 数据是否全部加载完
      // finished: false,
      page: 1,
    };
  },
  methods: {
    ...mapMutations(['setListItem', 'setFinished']),
    ...mapActions(['getGoodsList']),
    // 刷新
    onRefresh() {
      // this.page = 1;
      // 设置当前页码为1
      this.setListItem({ page: 1 });
      // 获取数据
      this.getGoodsList().then(() => {
        // 刷新完成
        this.isLoading = false;
        // 设置商品没有全部加载完
        this.setFinished(false);
      });
    },
    onLoad() {
      // 商品全部加载完成不执行后面的代码
      if (this.finished) {
        return;
      }
      // this.page = 1;
      // 设置页码
      this.setListItem({ page: this.listInfo.page += 1 });
      // 获取下一页数据
      this.getGoodsList(true).then(() => {
        this.loading = false;
        // 商品数量大于等于总数，设置商品全部加载完
        if (this.sppoList.length >= this.listInfo.total) {
          // this.finished = true;
          this.setFinished(true);
        }
      });
    },
    changeType(type) {
      this.sort = '';
      // 综合
      if (type === 'all') {
        this.index = 0;
      // 销量
      } else if (type === 'sales') {
        this.index = 1;
      // 升序 / 降序
      } else {
        this.index = 2;
        // sise升序 desc降序
        this.sort = this.laside ? 'rise' : 'desc';
        this.laside = !this.laside;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Productlist {
    width: 296px;
    position: absolute;
    right: 0;
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
                color: #ff1a90;
                font-weight: bold;
            }
            .rise {
                &:before {
                    border-bottom-color: #ff1a90 !important;
                }
            }
            .desc {
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
