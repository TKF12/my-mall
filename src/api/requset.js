import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/goods/',
});

// 请求拦截
instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    appkey: 'xiaomi_1644998775263',
    ...config.params,
  },
}));

// 响应拦截
instance.interceptors.response.use((rep) => {
  if (rep.status === 200) {
    return rep.data;
  }
  return rep;
});

export default instance;
