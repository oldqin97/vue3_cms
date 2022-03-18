/*
 * @Author: qin
 * @Date: 2022-03-16 23:16:58
 * @LastEditTime: 2022-03-18 18:42:20
 * @FilePath: \vue3_cms\src\global\plugins\pluginElement.js
 *  -> The best way to explain it is to do it
 */

import {
  ElButton,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
} from 'element-plus';
import { Edit, User, Iphone } from '@element-plus/icons-vue';
const components = [
  ElButton,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  // ~~~~~~~~~~~~~~~~~~~~~~~~
  Edit,
  User,
  Iphone,
];

export default function (app) {
  components.forEach(cpn => {
    app.component(cpn.name, cpn);
  });
}
