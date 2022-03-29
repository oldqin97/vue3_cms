/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:41
 * @LastEditTime: 2022-03-29 23:02:43
 * @FilePath: \vue3_cms\src\store\index.js
 *  -> The best way to explain it is to do it
 */
import { createStore } from 'vuex';

import login from './login/login.js';
import system from './main/system';

const store = createStore({
  state() {
    return {
      message: 'This message from index.js(store)',
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system,
  },
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}

export default store;
