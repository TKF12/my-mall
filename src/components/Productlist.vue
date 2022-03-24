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
                    @touchend="changeType('xiaoliang')"
                >
                    销量
                </li>
                <li
                    :class="[index === 2 ? 'active' : '', sort]"
                    @touchend="changeType('jiang')"
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
    ...mapState(['sppoList', 'listInfo']),
  },
  mounted() {
    this.loading = false;
  },
  data() {
    return {
      index: 0,
      sort: '',
      laside: true,
      isLoading: false,
      loading: true,
      // 数据是否全部加载完
      finished: false,
      page: 1,
    };
  },
  methods: {
    ...mapMutations(['setListItem']),
    ...mapActions(['getGoodsList']),
    onRefresh() {
      this.setListItem({ page: 1 });
      this.getGoodsList().then(() => {
        this.isLoading = false;
      });
    },
    onLoad() {
      if (this.finished) {
        return;
      }
      console.log('pro');
      this.setListItem({ page: this.page + 1 });
      this.getGoodsList(true).then(() => {
        this.loading = false;
        console.log(this.sppoList.length >= this.listInfo.total);
        if (this.sppoList.length >= this.listInfo.total) {
          console.log('leng');
          this.finished = true;
        }
      });
    },
    changeType(type) {
      this.sort = '';
      if (type === 'all') {
        this.index = 0;
      } else if (type === 'xiaoliang') {
        this.index = 1;
      } else {
        this.index = 2;
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
