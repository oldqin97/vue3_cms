/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:41
 * @LastEditTime: 2022-03-17 07:09:07
 * @FilePath: \vue3_cms\src\store\index.js
 *  -> The best way to explain it is to do it
 */
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      message: 'this data from vuex',
    };
  },
});

export default store;
