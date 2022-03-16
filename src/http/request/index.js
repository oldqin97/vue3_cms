/*
 * @Author: qin
 * @Date: 2022-03-16 20:09:22
 * @LastEditTime: 2022-03-16 22:41:55
 * @FilePath: \vue3_cms\src\http\request\index.js
 *  -> The best way to explain it is to do it
 */
import axios from 'axios';

let source = {};
let requestList = [];

function cancelRequest(url) {
  console.log(requestList.includes(url), url);
  if (
    url &&
    requestList.includes(url) &&
    typeof source[url] === 'function'
  ) {
    console.log('enter');
    source[url]('终止请求');
  } else if (!url && allCancel) {
    requestList.forEach(el => {
      source[el]('批量终止请求');
    });
  }
}

class OQRequest {
  constructor(config) {
    this.instance = axios.create(config);
    this.hooks = config.hooks;

    // ~ 每个实例的config配置的拦截器
    this.instance.interceptors.request.use(
      this.hooks?.requestInterceptor,
      this.hooks?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.hooks?.responseInterceptor,
      this.hooks?.responseInterceptorCatch
    );

    // ~ 全局interceptors
    this.instance.interceptors.request.use(
      config => {
        // console.log('全局请求拦截器成功');
        return config;
      },
      err => {
        // console.log('全局请求拦截器失败');
        return err;
      }
    );
    this.instance.interceptors.response.use(
      res => {
        // console.log('全局响应拦截器成功');
        if (res.config?.url) {
          let url = JSON.stringify(res.config.url);
          requestList = requestList.filter(item => {
            return !url.includes(item);
          });
        }
        return res.data;
      },
      err => {
        // console.log('全局响应拦截器失败');
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      if (config.hooks?.requestInterceptor) {
        config = config.hooks.requestInterceptor(config);
      }

      if (requestList.length) {
        cancelRequest(config.url);
      }
      if (config.isCancelRequest) {
        requestList.push(config.url);
        config.cancelToken = new axios.CancelToken(c => {
          source[config.url] = c;
        });
      }
      // console.log(requestList, source);

      this.instance
        .request(config)
        .then(res => {
          if (config.hooks?.responseInterceptor) {
            res = config.hooks?.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config) {
    return this.request({ ...config, method: 'POST' });
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' });
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export { cancelRequest, OQRequest };
