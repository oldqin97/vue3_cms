/*
 * @Author: qin
 * @Date: 2022-03-18 22:21:40
 * @LastEditTime: 2022-03-23 00:44:42
 * @FilePath: \vue3_cms\src\utils\MapMenus.js
 *  -> The best way to explain it is to do it
 */

let firstMenu = null;

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
        if (!firstMenu) firstMenu = menu;
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  return routes;
}

export function pathMaoToMenu(userMenus, currentPath, breadcrumbs) {
  for (let menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMaoToMenu(
        menu.children ?? [],
        currentPath,
      );
      if (findMenu) {
        if (breadcrumbs) {
          breadcrumbs.push({ name: menu.name });
          breadcrumbs.push({
            name: findMenu.name,
          });
        }
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export function pathMapBreadcrumbs(userMenus, currentPath) {
  const breadcrumbs = [];
  pathMaoToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export { firstMenu };
