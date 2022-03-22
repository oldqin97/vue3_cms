<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-22 19:01:53
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <div class="search">
      <o-q-form :formItems="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import OQForm from '@/base-ui/form';

export default defineComponent({
  name: 'user',
  components: { OQForm },
  setup() {
    const formItems = [
      {
        type: 'input',
        label: 'ID',
        rules: [],
        placeholder: '请输入ID',
      },
      {
        type: 'input',
        label: '用户名',
        rules: [],
        placeholder: '请输入用户名',
      },
      {
        type: 'password',
        label: '密码',
        rules: [],
        placeholder: '请输入密码',
      },
      {
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
        type: 'datepicker',
        label: '创建时间',
        rules: [],
        otherOptions: {
          'start-placeholder': '开始时间',
          'end-placeholder': '结束时间',
          type: 'daterange',
        },
      },
    ];
    return {
      formItems,
    };
  },
});
</script>

<style lang="scss" scoped></style>
