/*
 * @Author: qin
 * @Date: 2022-04-08 15:50:17
 * @LastEditTime: 2022-04-08 15:51:21
 * @FilePath: \vue3_cms\src\views\main\system\role\config\model.config.js
 *  -> The best way to explain it is to do it
 */
/*
 * @Author: qin
 * @Date: 2022-04-06 21:25:29
 * @LastEditTime: 2022-04-08 00:40:08
 * @FilePath: \vue3_cms\src\views\main\system\user\model.config.js
 *  -> The best way to explain it is to do it
 */

const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      rules: [],
      placeholder: '请输入角色名',
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      rules: [],
      placeholder: '请输入角色介绍',
    },
  ],
  colLayout: {
    span: 24,
  },
  itemStyle: {},
};
export default modalConfig;
