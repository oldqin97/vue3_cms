/*
 * @Author: qin
 * @Date: 2022-03-18 02:06:03
 * @LastEditTime: 2022-04-06 10:57:59
 * @FilePath: \vue3_cms\src\store\login\login.js
 *  -> The best way to explain it is to do it
 */

import router from '@/router';

import {
  mapMenusToRoutes,
  mapMenusToPermissions,
} from '@/utils/MapMenus.js';

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
      permissions: [],
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

      // + userMenus 映射到routes里面
      const routes = mapMenusToRoutes(userMenus);
      // + 然后将routes 添加到 router.main.children里面
      routes.forEach(route => {
        router.addRoute('main', route);
      });

      // + 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus);
      state.permissions = permissions;
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

    // ~ 持久化token , userInfo , userMenus
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
