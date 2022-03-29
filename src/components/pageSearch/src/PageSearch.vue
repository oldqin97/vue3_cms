<!--
 * @Author: qin
 * @Date: 2022-03-29 21:54:54
 * @LastEditTime: 2022-03-29 22:00:00
 * @FilePath: \vue3_cms\src\components\pageSearch\src\PageSearch.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="page-search">
    <o-q-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <el-button type="primary" icon="Edit">重置</el-button>
        <el-button type="primary" icon="Search">搜索</el-button>
      </template>
    </o-q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import OQForm from '@/base-ui/form';
import formConfig from '@/views/main/system/user/formConfig';
formConfig;
export default defineComponent({
  name: 'PageSearch',
  components: {
    OQForm,
  },
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: '',
    });
    return {
      formData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
