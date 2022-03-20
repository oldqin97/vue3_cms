/*
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-20 21:04:14
 * @FilePath: \vue3_cms\src\router\main\system\user\user.js
 *  -> The best way to explain it is to do it
 */
const user = () => import('@/views/main/system/user/user.vue');
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: [],
};
