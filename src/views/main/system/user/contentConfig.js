/*
 * @Author: qin
 * @Date: 2022-03-30 23:03:59
 * @LastEditTime: 2022-03-30 23:06:18
 * @FilePath: \vue3_cms\src\views\main\system\user\contentConfig.js
 *  -> The best way to explain it is to do it
 */

const contentTableConfig = {
  title: '用户列表',
  propsList: [
    { prop: 'name', label: '用户名', minWidth: '70' },
    { prop: 'realname', label: '真实姓名', minWidth: '70' },
    { prop: 'cellphone', label: '电话号码', minWidth: '100' },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '50',
      slotName: 'status',
    },
    {
      prop: 'createAt',
      label: '创建事件',
      minWidth: '130',
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新事件',
      minWidth: '130',
      slotName: 'updateAt',
    },
    {
      label: '操作',
      miniWidth: '100',
      slotName: 'handler',
    },
  ],
  showIndexColumn: true,
  showSelectColumn: true,
};
export default contentTableConfig;
