import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/goods';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 二级导航栏
    sideBarList: [],
    // 商品数据
    sppoList: [],
    // 当前选中的信息
    listInfo: {
      type: 2,
      page: 1,
      size: 10,
      sort: 'all',
      total: 0,
    },
    // 加载是否显示
    isLoading: false,
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
    // 设置当前选中的某个属性的数据
    setListItem(state, payload) {
      state.listInfo = { ...state.listInfo, ...payload };
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
      await api.goodsList(ctx.state.listInfo).then((data) => {
        ctx.commit('setListItem', { total: data.total });
        ctx.commit('setGoodsList', payload ? [...ctx.state.sppoList, ...data.list] : data.list);
      });
    },
  },
  modules: {
  },
});
