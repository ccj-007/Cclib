import axios from 'axios';
import { AxiosResponse } from 'axios'
import QS from 'qs';

const isPrd = process.env.NODE_ENV

export const baseURL = isPrd ? 'http://localhost:8000' : 'http://124.223.162.201'

const service = axios.create({
  baseURL
})

service.interceptors.request.use(config => {
  const token = window.localStorage.getItem('userToken')
  //设置请求头
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  }
  //序列化请求参数，不然post请求参数后台接收不正常
  config.data = QS.stringify(config.data)
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
