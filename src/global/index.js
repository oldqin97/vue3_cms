/*
 * @Author: qin
 * @Date: 2022-03-16 23:14:22
 * @LastEditTime: 2022-03-16 23:31:25
 * @FilePath: \vue3_cms\src\global\index.js
 *  -> The best way to explain it is to do it
 */

import { pluginElement } from './plugins';

// export function registerApp(app) {
//   registerElement(app);
// }

const globalRegister = {
  install(app) {
    pluginElement(app);
  },
};
export default globalRegister;
