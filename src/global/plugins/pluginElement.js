/*
 * @Author: qin
 * @Date: 2022-03-16 23:16:58
 * @LastEditTime: 2022-03-16 23:18:05
 * @FilePath: \vue3_cms\src\global\plugins\register-element.js
 *  -> The best way to explain it is to do it
 */

import { ElButton, ElIcon } from 'element-plus';
import { Edit, ArrowDown } from '@element-plus/icons-vue';
const components = [ElButton, ElIcon, Edit, ArrowDown];

export default function (app) {
  components.forEach(cpn => {
    app.component(cpn.name, cpn);
  });
}
