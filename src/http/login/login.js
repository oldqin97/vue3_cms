/*
 * @Author: qin
 * @Date: 2022-03-18 02:43:28
 * @LastEditTime: 2022-03-18 17:26:12
 * @FilePath: \vue3_cms\src\http\login\login.js
 *  -> The best way to explain it is to do it
 */

import { oqRequest } from '../index.js';

const loginApi = {
  accountLogin: '/login',
  loginUserInfo: '/users/', // users/:id
  userMenus: 'role/', // role/:id/menu
};

// ~ 账号登录函数
export function accountLoginRequest(account) {
  return oqRequest.post({
    url: loginApi.accountLogin,
    data: account,
  });
}

// ~ 根据id查询用户信息函数
export function requestUserInfoById(id) {
  return oqRequest.get({
    url: loginApi.loginUserInfo + id,
  });
}

export function requestUserMenusByRoleId(id) {
  return oqRequest.request({
    url: loginApi.userMenus + id + '/menu',
  });
}
