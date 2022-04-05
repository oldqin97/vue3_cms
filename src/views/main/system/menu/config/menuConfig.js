/*
 * @Author: qin
 * @Date: 2022-04-06 01:17:58
 * @LastEditTime: 2022-04-06 01:43:44
 * @FilePath: \vue3_cms\src\views\main\system\menu\config\menuConfig.js
 *  -> The best way to explain it is to do it
 */
const menuConfig = {
  title: '菜单列表',
  propsList: [
    { prop: 'name', label: '菜单名称', Width: '100' },
    {
      prop: 'type',
      label: '类型',
      minWidth: '50',
    },
    {
      prop: 'url',
      label: '菜单路径',
      minWidth: '70',
    },
    {
      prop: 'icon',
      label: '菜单图标',
      minWidth: '100',
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100',
    },
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children',
    },
  },
};

export default menuConfig;
