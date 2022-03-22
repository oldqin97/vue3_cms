/*
 * @Author: qin
 * @Date: 2022-03-20 21:04:39
 * @LastEditTime: 2022-03-22 18:01:17
 * @FilePath: \vue3_cms\src\router\main\system\menu\menu.js
 *  -> The best way to explain it is to do it
 */
const Menu = () => import('@/views/main/system/menu/Menu.vue')
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: Menu,
  children: []
}
