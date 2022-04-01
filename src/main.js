import Vue from 'vue';
import Vant from 'vant';
import tool from '@/utils/tool';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.$bus = new Vue({});

Vue.config.productionTip = false;

// 获取本地存储的数据
store.commit('setListStorage', tool.quireStorage());

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
