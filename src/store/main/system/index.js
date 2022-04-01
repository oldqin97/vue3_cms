/*
 * @Author: qin
 * @Date: 2022-03-29 22:10:51
 * @LastEditTime: 2022-03-31 17:06:24
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
    };
  },
  getters: {
    pageListData(state) {
      return pageName => state[`${pageName}List`];
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
      }
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);

      // ~ 发送请求

      console.log('enter');
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
