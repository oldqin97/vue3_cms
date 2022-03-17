/*
 * @Author: qin
 * @Date: 2022-03-16 21:02:27
 * @LastEditTime: 2022-03-18 03:20:48
 * @FilePath: \vue3_cms\src\http\index.js
 *  -> The best way to explain it is to do it
 */

import { OQRequest, cancelRequest } from './request';
import { BASE_RUL, TIME_OUT } from './request/config';
import localCache from '@/utils/Cache.js';

const oqRequest = new OQRequest({
  baseURL: BASE_RUL,
  timeout: TIME_OUT,
  hooks: {
    requestInterceptor(config) {
      // console.log('请求成功的拦截');
      // ~ 携带token的拦截
      const token = localCache.getCache('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    requestInterceptorCatch(error) {
      // console.log('请求失败的拦截');
      return error;
    },
    responseInterceptor(config) {
      // console.log('响应成功的拦截');
      return config;
    },
    responseInterceptorCatch(error) {
      // console.log('响应失败的拦截');
      return error;
    },
  },
});

export { oqRequest, cancelRequest };
