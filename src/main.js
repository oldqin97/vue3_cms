/*
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-30 22:42:46
 * @FilePath: \vue3_cms\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import router from './router';
import 'normalize.css';
import store, { setupStore } from './store';

import App from './App.vue';

import globalRegister from '@/global';
import '@/assets/css/index.scss';

const app = createApp(App);

app.use(globalRegister);
app.use(store);
setupStore();
app.use(router);

app.mount('#app');
