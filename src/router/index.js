/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:36
 * @LastEditTime: 2022-03-16 23:40:36
 * @FilePath: \vue3_cms\src\router\index.js
 *  -> The best way to explain it is to do it
 */

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () =>
      import(
        /** webpackChunkName: 'Home-chunk' */ '@/views/Home.vue'
      ),
  },
  {
    path: '/about',
    component: () =>
      import(
        /** webpackChunkName: 'About-chunk' */ '@/views/About.vue'
      ),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
