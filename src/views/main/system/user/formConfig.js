/*
 * @Author: qin
 * @Date: 2022-03-22 22:07:42
 * @LastEditTime: 2022-03-25 20:17:48
 * @FilePath: \vue3_cms\src\views\main\system\user\formConfig.js
 *  -> The best way to explain it is to do it
 */
const formConfig = {
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
      field: 'id',
      type: 'input',
      label: 'ID',
      rules: [],
      placeholder: '请输入ID',
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名',
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码',
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      options: [
        { title: '篮球', value: '篮球' },
        { title: '足球', value: '足球' },
        { title: '兵乓球', value: '兵乓球' },
      ],
      placeholder: '请选择喜欢的运动',
    },
    {
      field: 'createTime',
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

export default formConfig;
