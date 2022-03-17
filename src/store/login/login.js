/*
 * @Author: qin
 * @Date: 2022-03-18 02:06:03
 * @LastEditTime: 2022-03-18 03:27:49
 * @FilePath: \vue3_cms\src\store\login\login.js
 *  -> The best way to explain it is to do it
 */

import {
  accountLoginRequest,
  requestUserInfoById,
} from '@/http/login/login.js';
import localCache from '@/utils/Cache.js';

const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token;
    },
    changeUserInfo(state, info) {
      state.userInfo = info;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      // ~ 实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit('changeToken', token);

      localCache.setCache('token', token);

      // ~ 请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);

      localCache.setCache('userInfo', userInfo);
    },
    phoneLoginAction({ commit }, payload) {},
  },
};

export default loginModule;
