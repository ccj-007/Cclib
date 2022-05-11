import axios from 'axios';
import { AxiosResponse } from 'axios'

const isPrd = process.env.NODE_ENV

export const baseURL = isPrd ? 'http://localhost:8000' : 'http://124.223.162.201'

const service = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

service.interceptors.request.use(config => {
  return config
}, (error: any) => {
  return error;
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.data.code) {
    switch (response.data.code) {
      case 200:
        return response.data;
      case 401:
        //未登录处理方法
        break;
      case 403:
        //token过期处理方法
        break;
      default:
      // message.error(response.data.msg)
    }
  } else {
    return response;
  }
})

export default service
