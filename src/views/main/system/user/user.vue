<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-22 22:08:20
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <div class="search">
      <o-q-form v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import OQForm from '@/base-ui/form';
import formConfig from './formConfig';

export default defineComponent({
  name: 'user',
  components: { OQForm },
  setup() {
    return {
      formConfig,
    };
  },
});
</script>

<style lang="scss" scoped></style>
