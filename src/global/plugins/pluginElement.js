/*
 * @Author: qin
 * @Date: 2022-03-16 23:16:58
 * @LastEditTime: 2022-03-19 23:43:30
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
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
} from 'element-plus';
import {
  Edit,
  User,
  Iphone,
  Monitor,
  Setting,
  Goods,
  Fold,
} from '@element-plus/icons-vue';
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
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  // ~~~~~~~~~~~~~~~~~~~~~~~~
  Edit,
  User,
  Iphone,
  Monitor,
  Setting,
  Goods,
  Fold,
];

export default function (app) {
  components.forEach(cpn => {
    app.component(cpn.name, cpn);
  });
}
