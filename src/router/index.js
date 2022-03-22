/*
 * @Author: qin
 * @Date: 2022-03-16 23:32:36
 * @LastEditTime: 2022-03-22 01:07:18
 * @FilePath: \vue3_cms\src\router\index.js
 *  -> The best way to explain it is to do it
 */
import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/login/Login.vue';

import localCache from '@/utils/Cache.js';
import { mapMenusToRoutes } from '@/utils/MapMenus.js';
import store from '@/store';

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

    // const userMenus = store.state.login.userMenus;
    // // + userMenus 映射到routes里面
    // const routes = mapMenusToRoutes(userMenus);
    // // console.log(routes);
    // // + 然后将routes 添加到 router.main.children里面
    // routes.forEach(route => {
    //   router.addRoute('main', route);
    // });
  }
});

export default router;
