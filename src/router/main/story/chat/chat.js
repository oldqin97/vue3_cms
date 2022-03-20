/*
 * @Author: qin
 * @Date: 2022-03-20 21:08:05
 * @LastEditTime: 2022-03-20 22:05:21
 * @FilePath: \vue3_cms\src\router\main\story\chat\chat.js
 *  -> The best way to explain it is to do it
 */
const chat = () => import('@/views/main/story/chat/chat.vue');
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  children: [],
};
