/*
 * @Author: qin
 * @Date: 2022-04-06 21:25:29
 * @LastEditTime: 2022-04-06 21:38:27
 * @FilePath: \vue3_cms\src\views\main\system\user\model.config.js
 *  -> The best way to explain it is to do it
 */

const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名',
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名',
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码',
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码',
    },
  ],
  colLayout: {
    span: 24,
  },
  itemStyle: {},
};
export default modalConfig;
