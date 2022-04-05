/*
 * @Author: qin
 * @Date: 2022-03-29 22:10:51
 * @LastEditTime: 2022-04-06 01:39:20
 * @FilePath: \vue3_cms\src\store\main\system\index.js
 *  -> The best way to explain it is to do it
 */

import { getPageListData } from '@/http/main/system';
import LocalCache from '@/utils/Cache.js';
const systemModule = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    };
  },
  getters: {
    pageListData(state) {
      return pageName => {
        return state[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return pageName => state[`${pageName}Count`];
    },
  },
  mutations: {
    changeUserList(state, userList) {
      LocalCache.setCache('userList', userList);
      state.userList = userList;
    },

    changeUserCount(state, userCount) {
      LocalCache.setCache('userCount', userCount);
      state.userCount = userCount;
    },

    changeRoleList(state, roleList) {
      LocalCache.setCache('roleList', roleList);
      state.roleList = roleList;
    },

    changeRoleCount(state, roleCount) {
      LocalCache.setCache('roleCount', roleCount);
      state.roleCount = roleCount;
    },

    changeGoodsList(state, goodsList) {
      LocalCache.setCache('goodsList', goodsList);
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount) {
      LocalCache.setCache('goodsCount', goodsCount);
      state.goodsCount = goodsCount;
    },

    changeMenuList(state, menuList) {
      LocalCache.setCache('menuList', menuList);
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount) {
      LocalCache.setCache('menuCount', menuCount);
      state.menuCount = menuCount;
    },
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload?.pageName;
      let pageUrl = '';

      switch (pageName) {
        case 'user':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
        case 'goods':
          pageUrl = '/goods/list';
          break;
        case 'menu':
          pageUrl = '/menu/list';
          break;
      }
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);

      // ~ 发送请求
      const pageResult = await getPageListData(
        pageUrl,
        payload.queryInfo,
      );
      const { list, totalCount } = pageResult?.data;
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);

      // switch (pageName) {
      //   case 'user':
      //     commit(`change${changePageName}List`, userList);
      //     commit(`change${changePageName}Count`, userCount);
      //     break;
      //   case 'role':
      //     commit(`change${changePageName}List`, roleList);
      //     commit(`change${changePageName}Count`, roleCount);
      //     break;
      // }
    },
  },
};

export default systemModule;
