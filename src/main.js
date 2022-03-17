/*
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-17 09:09:37
 * @FilePath: \vue3_cms\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import 'normalize.css';

import App from './App.vue';

import globalRegister from '@/global';
import '@/assets/css/index.scss';

const app = createApp(App);

app.use(globalRegister).use(store).use(router).mount('#app');
