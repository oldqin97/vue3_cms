/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:41
 * @LastEditTime: 2022-03-18 02:15:54
 * @FilePath: \vue3_cms\src\store\index.js
 *  -> The best way to explain it is to do it
 */
import { createStore } from 'vuex';

import login from './login/login.js';

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
  },
});

export default store;
