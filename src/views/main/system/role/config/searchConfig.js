/*
 * @Author: qin
 * @Date: 2022-03-31 17:13:56
 * @LastEditTime: 2022-03-31 17:13:56
 * @FilePath: \vue3_cms\src\views\main\system\role\config\searchConfig.js
 *  -> The best way to explain it is to do it
 */
export const searchFormConfig = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
      },
    },
  ],
};
