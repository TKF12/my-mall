import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/goods';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarList: [],
  },
  mutations: {
    // 设置二级导航栏
    setBarList(state, payload) {
      state.sideBarList = payload;
    },
  },
  actions: {
    // 获取二级导航栏
    async setBarList(ctx, payload) {
      await api.getSideBar({ type: payload }).then((data) => {
        ctx.commit('setBarList', data);
      });
    },
  },
  modules: {
  },
});
