<template>
    <div class="Search">
        <div class="search-header">
            <router-link
                :to="{ name: 'Categories' }"
                tag="div"
                class="search-left"
            >
                <van-icon name="arrow-left"/>
            </router-link>
            <div class="search-content">
                <van-search
                    v-model="form.type"
                    show-action
                    :placeholder="placeSearch"
                    @search="onSearch(form.type)"
                    @input="input"
                    @focus="onFocus"
                >
                    <template #action>
                        <div @touchend="onSearch(form.type)" v-if="showText">搜索</div>
                        <div v-else id="shopping-cart">
                            <van-icon name="shopping-cart-o" :badge="badge" />
                        </div>
                    </template>
                </van-search>
            </div>
        </div>
        <van-list class="search-list" v-if="show">
            <van-cell v-for="(item, i) in likeList" :key="i">
                <template>
                    <div
                        v-html="formatHTML(item)"
                        @touchend="onSearch(item)"
                    ></div>
                </template>
            </van-cell>
        </van-list>
        <van-empty description="暂无商品" v-if="!show && !shoppList.length && form.type" />
        <Searchhistory
          v-if="!shoppList.length && form.type === ''"
          :historyList="historyList"
          @toucheItem="onSearch"
        />
        <div class="shoppList" v-if="shoppList.length">
          <van-pull-refresh
            success-text="刷新成功"
            head-height="70"
            v-model="isLoading"
            @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                :immediate-check="true"
                @load="onLoad"
            >
                <Productcard
                    v-for="n in shoppList"
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
import Productcard from '@/components/Productcard.vue';
import api from '@/api/goods';
import { mapState, mapMutations } from 'vuex';
import Searchhistory from '@/components/Searchhistory.vue';

export default {
  data() {
    return {
      timer: null,
      // 搜索是否显示
      showText: true,
      // 商品列表
      shoppList: [],
      // 搜索字列表
      likeList: [],
      // 搜索历史
      historyList: [],
      // 默认搜索
      placeSearch: '苹果',
      // 请求数量
      form: {
        type: '',
        page: 0,
        size: 10,
      },
      // 搜索字列表是否显示
      show: false,
      // 刷新是否处于加载状态
      isLoading: false,
      // 加载状态
      loading: false,
      // 数据是否全部加载完
      finished: false,
    };
  },
  components: {
    Productcard,
    Searchhistory,
  },
  created() {
    // 获取搜索历史记录
    this.historyList = JSON.parse(localStorage.getItem('historyList')) || [];
  },
  computed: {
    ...mapState(['sppoListStorage']),
    // 购物车数量
    badge() {
      const num = Object.values(this.sppoListStorage).reduce(
        (newitem, item) => newitem + item,
        0,
      );
      return num > 99 ? '99+' : num;
    },
  },
  methods: {
    ...mapMutations(['setSppoListStorage']),
    async onSearch(val) {
      if (val) {
        this.form.type = val;
      }
      // 没有输入数据 使用默认
      if (!this.form.type) {
        this.form.type = this.placeSearch;
      }
      this.form.page = 1;
      // 搜索列表不显示
      this.show = false;
      // 搜索文字隐藏
      this.showText = false;
      // 查看历史记录是否有重复
      const rep = this.historyList.find((ele) => ele.value === this.form.type);
      // 重复更新时间戳 并 排序
      if (rep) {
        rep.time = new Date().getTime();
        this.historyList.sort((a, b) => b.time - a.time);
      } else {
        this.historyList.unshift({ value: this.form.type, time: new Date().getTime() });
        if (this.historyList.length >= 11) {
          this.historyList.pop();
        }
      }
      // 存储到本地
      localStorage.setItem('historyList', JSON.stringify(this.historyList));
      // 设置商品没有全部加载完成
      this.finished = false;
      // 获取商品数据
      const list = await api.search(this.form);
      // 更新商品数据
      this.shoppList = list.list;
      // 当前商品数 大于等于 商品的总数 则加载完成
      if (this.shoppList.length >= list.total) {
        this.loading = false;
        this.finished = true;
      }
      // 清空搜索列表
      this.likeList = [];
    },
    onFocus() {
      // 搜索文字显示
      this.showText = true;
      // 搜索列表显示
      this.show = true;
      // 清空商品
      this.shoppList = [];
      this.getLikeSearch();
    },
    input() {
      // 输入为空，不显示搜索列表 清空搜索列表
      if (!this.form.type) {
        this.show = false;
        this.likeList = [];
        return;
      }
      // 显示搜索列表
      this.show = true;
      this.getLikeSearch();
    },
    onRefresh() {
      this.form.page = 0;
      this.isLoading = false;
      this.finished = false;
      // 清空商品列表
      this.shoppList = [];
      this.onLoad();
    },
    dleLen(id, num) {
      this.setSppoListStorage({ id, num });
    },
    onLoad() {
      // 商品全部加载完成不执行后面的代码
      if (this.finished) {
        return;
      }
      this.loading = true;
      this.form.page += 1;
      // 获取下一页数据
      api.search(this.form).then((list) => {
        this.shoppList = [...this.shoppList, ...list.list];
        // 加载状态关闭
        this.loading = false;
        // 当前商品数 大于等于 请求的总数 则加载完成
        if (this.shoppList.length >= list.total) {
          // 商品加载完成
          this.finished = true;
        }
      });
    },
    getLikeSearch() {
      if (this.timer || !this.form.type) {
        clearTimeout(this.timer);
        this.timer = null;
        return;
      }
      this.timer = setTimeout(() => {
        // 请求前数据为空 则不请求
        if (this.form.type === '') {
          return;
        }
        api.likeSearch({ likeValue: this.form.type }).then((data) => {
          this.likeList = data.result;
        });
        this.timer = null;
      }, 300);
    },
    formatHTML(item) {
      const reg = new RegExp(this.form.type, 'g');
      // 匹配搜索关键字 替换成font标签颜色red
      return item.replace(reg, this.form.type.fontcolor('red'));
    },
  },
};
</script>

<style lang="less" scoped>
.Search {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    .search-header {
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        z-index: 20;
        background-color: #fff;
        .search-left {
            font-size: 22px;
        }
        .search-content {
            flex: 1 auto;
        }
        #shopping-cart {
            margin: 0 5px;
            font-size: 20px;
        }
    }
    .search-list {
        position: relative;
        top: 53px;
        left: 0;
    }
    .shoppList {
        position: absolute;
        width: 345px;
        margin: 0 auto;
        top: 55px;
        left: 0;
        right: 0;
    }
    .Searchhistory{
      position: absolute;
      top: 53px;
      width: 345px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
}
</style>
