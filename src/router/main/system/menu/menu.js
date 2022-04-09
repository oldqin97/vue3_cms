/*
 * @Author: qin
 * @Date: 2022-03-20 21:04:39
 * @LastEditTime: 2022-04-09 21:51:51
 * @FilePath: \vue3_cms\src\router\main\system\menu\menu.js
 *  -> The best way to explain it is to do it
 */

const Menu = () => import('@/views/main/system/menu/menu.vue');

export default {
  path: '/main/system/menu',
  name: 'menu',
  component: Menu,
  children: [],
};
