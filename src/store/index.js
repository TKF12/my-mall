import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/goods';
import tool from '@/utils/tool';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 二级导航栏
    sideBarList: [],
    // 商品数据
    sppoList: [],
    // 当前选中的信息
    listInfo: {
      type: 0,
      size: 10,
      sort: 'all',
    },
    total: 0,
    // 加载是否显示
    isLoading: false,
    sppoListStorage: {},
  },
  mutations: {
    // 设置二级导航栏
    setBarList(state, payload) {
      state.sideBarList = payload;
    },
    // 设置商品数据
    setGoodsList(state, payload) {
      state.sppoList = payload;
    },
    // 设置加载状态
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    // 设置请求参数
    setListItem(state, payload) {
      state.listInfo = { ...state.listInfo, ...payload };
    },
    setSppoListStorage(state, { id, num }) {
      // 有这个数据
      if (state.sppoListStorage[id]) {
        // 当前数据等于1 并且 是减-1 则删除这个数据
        if (state.sppoListStorage[id] === 1 && num === -1) {
          Vue.delete(state.sppoListStorage, id);
        } else {
          // 当前数据加1
          Vue.set(state.sppoListStorage, id, state.sppoListStorage[id] += num);
        }
      } else {
        // 设置数据
        Vue.set(state.sppoListStorage, id, num);
      }
      // 数据存储到本地
      tool.addStorage(state.sppoListStorage);
    },
    setListStorage(state, payload) {
      state.sppoListStorage = payload;
    },
  },
  actions: {
    // 获取二级导航栏
    async getBarList(ctx, payload) {
      ctx.commit('setLoading', true);
      await api.getSideBar({ type: payload }).then((data) => {
        ctx.commit('setListItem', { type: data[0] });
        ctx.commit('setBarList', data);
      });
      ctx.commit('setLoading', false);
    },
    // 获取商品
    async getGoodsList(ctx, payload) {
      await api.goodsList({ ...ctx.state.listInfo, ...payload }).then((data) => {
        ctx.commit('setListItem', { total: data.total });
        ctx.commit('setGoodsList', [...ctx.state.sppoList, ...data.list]);
      });
    },
  },
  modules: {
  },
});
