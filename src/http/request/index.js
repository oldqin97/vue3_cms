/*
 * @Author: qin
 * @Date: 2022-03-16 20:09:22
 * @LastEditTime: 2022-03-31 17:45:00
 * @FilePath: \vue3_cms\src\http\request\index.js
 *  -> The best way to explain it is to do it
 */
import axios from 'axios';
import { ElLoading } from 'element-plus';

const DEFAULT_LOADING = true;

let source = {};
let requestList = [];

function cancelRequest(url, allCancel = false) {
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
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    // ~ 每个实例的config配置的拦截器
    this.instance.interceptors.request.use(
      this.hooks?.requestInterceptor,
      this.hooks?.requestInterceptorCatch,
    );
    this.instance.interceptors.response.use(
      this.hooks?.responseInterceptor,
      this.hooks?.responseInterceptorCatch,
    );

    // ~ 全局interceptors
    this.instance.interceptors.request.use(
      config => {
        // console.log('全局请求拦截器成功');
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0, 0, 0, 0.5)',
          });
        }
        return config;
      },
      err => {
        // console.log('全局请求拦截器失败');
        return err;
      },
    );
    this.instance.interceptors.response.use(
      res => {
        // console.log('全局响应拦截器成功');
        this.loading?.close();

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
        this.loading?.close();
        return err;
      },
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // + 单个请求hooks的处理
      if (config.hooks?.requestInterceptor) {
        config = config.hooks.requestInterceptor(config);
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
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

      this.instance
        .request(config)
        .then(res => {
          if (config.hooks?.responseInterceptor) {
            res = config.hooks?.responseInterceptor(res);
          }

          this.showLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch(err => {
          this.showLoading = DEFAULT_LOADING;
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
