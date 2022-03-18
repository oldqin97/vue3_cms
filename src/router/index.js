/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:36
 * @LastEditTime: 2022-03-18 18:17:35
 * @FilePath: \vue3_cms\src\router\index.js
 *  -> The best way to explain it is to do it
 */

import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/login/Login.vue';

import localCache from '@/utils/Cache.js';

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/main',
    component: () => import('@/views/main/Main.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(to => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');

    if (!token) {
      return '/login';
    }
  }
});

export default router;
