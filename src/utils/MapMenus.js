/*
 * @Author: qin
 * @Date: 2022-03-18 22:21:40
 * @LastEditTime: 2022-03-21 23:56:21
 * @FilePath: \vue3_cms\src\utils\MapMenus.js
 *  -> The best way to explain it is to do it
 */

import { useRoute, useRouter } from 'vue-router';

export function mapMenusToRoutes(userMenus) {
  const routes = [];

  // + 先去机制默认的所有route
  const allRoutes = [];
  // ?  require.context() 属于webpack的一个函数
  const routeFiles = require.context('../router/main', true, /\.js/);
  routeFiles.keys().forEach(key => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);
  // + 根据菜单获取添加的routes
  const _recurseGetRoute = menus => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find(route => {
          return route.path === menu.url;
        });
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  return routes;
}
