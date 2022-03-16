/*
 * @Author: qin
 * @Date: 2022-03-16 23:16:58
 * @LastEditTime: 2022-03-16 23:29:21
 * @FilePath: \vue3_cms\src\global\plugins\pluginElement.js
 *  -> The best way to explain it is to do it
 */

import { ElButton, ElIcon } from 'element-plus';
import { Edit, ArrowLeftBold } from '@element-plus/icons-vue';
const components = [ElButton, ElIcon, Edit, ArrowLeftBold];

export default function (app) {
  components.forEach(cpn => {
    app.component(cpn.name, cpn);
  });
}
