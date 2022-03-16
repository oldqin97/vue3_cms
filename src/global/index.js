/*
 * @Author: qin
 * @Date: 2022-03-16 23:14:22
 * @LastEditTime: 2022-03-16 23:22:20
 * @FilePath: \vue3_cms\src\global\index.js
 *  -> The best way to explain it is to do it
 */

import { pluginElement } from './plugins';

const globalRegister = {
  install(app) {
    pluginElement(app);
  },
};
export default globalRegister;
