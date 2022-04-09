/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:36
 * @LastEditTime: 2022-04-08 23:11:30
 * @FilePath: \vue3_cms\src\router\index.js
 *  -> The best way to explain it is to do it
 */
import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/login/Login.vue';

import localCache from '@/utils/Cache.js';
import { firstMenu } from '@/utils/MapMenus.js';

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/Main.vue'),
    // children: [], -> 根据userMenus来配置
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/notFound/NotFound.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// + 导航守卫做
router.beforeEach(to => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (!token) {
      return '/login';
    }

    if (to.path === '/main') {
      return firstMenu.url;
    }
  }
});

export default router;
