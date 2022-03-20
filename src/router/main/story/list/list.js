/*
 * @Author: qin
 * @Date: 2022-03-20 21:08:15
 * @LastEditTime: 2022-03-20 22:04:59
 * @FilePath: \vue3_cms\src\router\main\story\list\list.js
 *  -> The best way to explain it is to do it
 */
const list = () => import('@/views/main/story/list/list.vue');
export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  children: [],
};
