/*
 * @Author: qin
 * @Date: 2022-03-18 22:21:40
 * @LastEditTime: 2022-04-06 10:54:25
 * @FilePath: \vue3_cms\src\utils\MapMenus.js
 *  -> The best way to explain it is to do it
 */

let firstMenu = null;

export function mapMenusToRoutes(userMenus) {
  const routes = [];

  // + 获取默认的所有route
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

export function pathMapToMenu(userMenus, currentPath, breadcrumbs) {
  for (let menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(
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
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function mapMenusToPermissions(userMenus) {
  const permissions = [];

  const _recurseGetPermissions = menus => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? []);
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermissions(userMenus);

  return permissions;
}

export { firstMenu };
