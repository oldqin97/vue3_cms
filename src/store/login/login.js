/*
 * @Author: qin
 * @Date: 2022-03-18 02:06:03
 * @LastEditTime: 2022-03-18 18:07:27
 * @FilePath: \vue3_cms\src\store\login\login.js
 *  -> The best way to explain it is to do it
 */

import router from '@/router';

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId,
} from '@/http/login/login.js';
import localCache from '@/utils/Cache.js';

const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
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
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;
    },
  },
  actions: {
    // ~ 登录接口
    async accountLoginAction({ commit }, payload) {
      // + 实现登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit('changeToken', token);

      localCache.setCache('token', token);

      // + 请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);

      localCache.setCache('userInfo', userInfo);

      // + 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(
        userInfo.role.id,
      );
      const userMenus = userMenusResult.data;
      commit('changeUserMenus', userMenus);
      localCache.setCache('userMenus', userMenus);

      router.push('/main');
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token');
      const userInfo = localCache.getCache('userInfo');
      const userMenus = localCache.getCache('userMenus');

      if (token) {
        commit('changeToken', token);
      }

      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }

      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    },
  },
};

export default loginModule;
