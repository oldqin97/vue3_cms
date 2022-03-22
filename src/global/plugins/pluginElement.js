/*
 * @Author: qin
 * @Date: 2022-03-16 23:16:58
 * @LastEditTime: 2022-03-23 00:05:47
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
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
} from 'element-plus';
import {
  Edit,
  User,
  Iphone,
  Monitor,
  Setting,
  Goods,
  Fold,
  ArrowDown,
  Close,
  Cpu,
} from '@element-plus/icons-vue';
const components = [
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElRow,
  ElCol,
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
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  // ~~~~~~~~~~~~~~~~~~~~~~~~
  Edit,
  User,
  Iphone,
  Monitor,
  Setting,
  Goods,
  Fold,
  ArrowDown,
  Close,
  Cpu,
];

export default function (app) {
  components.forEach(cpn => {
    app.component(cpn.name, cpn);
  });
}
