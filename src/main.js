/*
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-16 23:22:41
 * @FilePath: \vue3_cms\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import App from './App.vue';

import globalRegister from '@/global';

const app = createApp(App);

app.use(globalRegister);
app.mount('#app');
