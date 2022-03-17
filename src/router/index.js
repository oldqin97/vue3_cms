/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:36
 * @LastEditTime: 2022-03-17 17:46:09
 * @FilePath: \vue3_cms\src\router\index.js
 *  -> The best way to explain it is to do it
 */

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () =>
      import(
        /** webpackChunkName: "Home-chunk" */ '@/views/login/Login.vue'
      ),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
