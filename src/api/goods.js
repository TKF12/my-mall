import requset from './requset';

export default {
  // 获取二级导航
  getSideBar(params) {
    return requset.get('/getsidebar', { params });
  },
  // 获取商品列表
  goodsList(params) {
    return requset.get('/getGoodsList', { params });
  },
};
