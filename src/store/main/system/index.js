/*
 * @Author: qin
 * @Date: 2022-03-29 22:10:51
 * @LastEditTime: 2022-03-29 23:42:35
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
    };
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
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      // ~ 发送请求
      const userList = LocalCache.getCache('userList');
      const userCount = LocalCache.getCache('userCount');

      if (!userList) {
        const pageResult = await getPageListData(
          payload.pageUrl,
          payload.queryInfo,
        );
        const { list, totalCount } = pageResult?.data;
        commit('changeUserList', list);
        commit('changeUserCount', totalCount);
      } else {
        commit('changeUserList', userList);
        commit('changeUserCount', userCount);
      }
    },
  },
};

export default systemModule;
