import requset from './requset';

export default {
  getSideBar(params) {
    return requset.get('/getsidebar', { params });
  },
};
