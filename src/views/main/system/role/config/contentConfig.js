/*
 * @Author: qin
 * @Date: 2022-03-30 23:03:59
 * @LastEditTime: 2022-03-31 16:45:58
 * @FilePath: \vue3_cms\src\views\main\system\role\config\contentConfig.js
 *  -> The best way to explain it is to do it
 */

export const contentTableConfig = {
  title: '用户列表',
  propsList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt',
    },
    { label: '操作', minWidth: '120', slotName: 'handler' },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
