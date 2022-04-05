/*
 * @Author: qin
 * @Date: 2022-03-22 22:07:42
 * @LastEditTime: 2022-04-01 16:58:53
 * @FilePath: \vue3_cms\src\views\main\system\user\formConfig.js
 *  -> The best way to explain it is to do it
 */
const formSearchConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 30px',
  },
  colLayOut: {
    // span: 8,
    xl: 6, // > 1920px 4
    lg: 8, // > 1200px 3
    md: 12,
    sm: 24,
    xs: 24,
  },
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
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码',
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      rules: [],
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 },
      ],
      placeholder: '请选择用户状态',
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        type: 'daterange',
      },
    },
  ],
};

export default formSearchConfig;
