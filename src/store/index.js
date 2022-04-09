/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:41
 * @LastEditTime: 2022-04-09 20:00:43
 * @FilePath: \vue3_cms\src\store\index.js
 *  -> The best way to explain it is to do it
 */
import { createStore } from 'vuex';

import login from './login/login.js';
import system from './main/system';
import dashboard from './main/dashboard/analysis';

import { getPageListData } from '@/http/main/system';

const store = createStore({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },

    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    },
  },
  getters: {},

  actions: {
    async getInitialDataAction({ commit }) {
      // + 请求角色数据
      const departMentResult = await getPageListData(
        '/department/list',
        {
          offset: 0,
          size: 100,
        },
      );
      const { list: departmentList } = departMentResult.data;

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000,
      });
      const { list: roleList } = roleResult.data;

      const menuResult = await getPageListData('/menu/list', {});
      const { list: menuList } = menuResult.data;

      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRole', roleList);
      commit('changeEntireMenu', menuList);
    },
  },
  modules: {
    login,
    system,
    dashboard,
  },
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
  store.dispatch('getInitialDataAction');
}

export default store;
