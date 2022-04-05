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
  // 模糊搜索
  likeSearch(params) {
    return requset.get('/likeSearch', { params });
  },
  // 搜索内容
  search(params) {
    return requset.get('/search', { params });
  },
  // 通过id获取商品
  getGoodsByIds(params) {
    return requset.get('/getGoodsByIds', { params });
  },
};
