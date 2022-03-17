/*
 * @Author: qin
 * @Date: 2022-03-16 21:03:09
 * @LastEditTime: 2022-03-18 02:56:14
 * @FilePath: \vue3_cms\src\http\request\config.js
 *  -> The best way to explain it is to do it
 */
// ~ 根据 process.env.NODE_ENV

// ~ webpack ->  DefinePlugin 这个插件注入变量
/**
 * + 开发环境: development
 * + 生成环境: production
 * + 测试环境: test
 */

let BASE_RUL = '';
let TIME_OUT = 5000;

if (process.env.NODE_ENV === 'development') {
  BASE_RUL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  BASE_RUL = 'http://152.136.185.210:5000';
}

export { BASE_RUL, TIME_OUT };
