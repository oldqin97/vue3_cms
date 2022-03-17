/*
 * @Author: qin
 * @Date: 2022-03-18 02:43:28
 * @LastEditTime: 2022-03-18 03:18:26
 * @FilePath: \vue3_cms\src\http\login\login.js
 *  -> The best way to explain it is to do it
 */

import { oqRequest } from '../index.js';


const loginApi = {
  accountLogin: '/login',
  loginUserInfo: '/users/',
};

// ~ 账号登录函数
function accountLoginRequest(account) {
  return oqRequest.post({
    url: loginApi.accountLogin,
    data: account,
  });
}

function requestUserInfoById(id) {
  return oqRequest.get({
    url: loginApi.loginUserInfo + id,
  });
}

export { accountLoginRequest, requestUserInfoById };
