import axios from 'axios';
import rootStore from '@/redux/index';
import { actionLoading } from '@/redux/load/actions';
import { setAlerts } from '@/redux/alerts/actions';
import Storage from '@/utils/localStoage';
const isDev = process.env.NODE_ENV;
const store = rootStore.store;

export const baseURL =
  isDev === 'development' ? 'http://localhost:8000' : 'http://cclibs.cn:8000';

const service = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

service.interceptors.request.use(
  (config: any) => {
    const token = Storage.get('token') || '';
    let pathname = window.location.pathname;
    if (!token && pathname !== '/login') {
      pathname = '/login';
    }
    config.headers.token = token;

    store.dispatch(actionLoading(true));
    let state = store.getState();
    console.log('loadReducers请求', state);

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    store.dispatch(actionLoading(false));
    let resCode = response.data.code;
    if (resCode) {
      switch (resCode) {
        case 200:
          store.dispatch(
            setAlerts({
              type: 'success',
              content: response.data.message,
            }),
          );
          return response.data;
        case 401:
          //未登录处理方法
          break;
        case 403:
          //token过期处理方法
          break;
        default:
          store.dispatch(
            setAlerts({
              type: 'error',
              content: response.data.message,
            }),
          );
          return response.data;
      }
    }
  },
  (error) => {
    store.dispatch(actionLoading(false));
    return Promise.reject(error);
  },
);

export default service;
