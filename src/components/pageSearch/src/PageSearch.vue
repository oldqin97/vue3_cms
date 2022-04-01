<!--
 * @Author: qin
 * @Date: 2022-03-29 21:54:54
 * @LastEditTime: 2022-03-31 21:57:36
 * @FilePath: \vue3_cms\src\components\pageSearch\src\PageSearch.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="page-search">
    <o-q-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 class="search-title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="Edit" @click="handleReset"
            >重置</el-button
          >
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </o-q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import OQForm from '@/base-ui/form';
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
    // + 双向绑定的属性应该由配置文件的field来决定的
    const formItems = props.formConfig?.formItems ?? [];
    const formOriginData = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }
    const formData = ref(formOriginData);

    // + 当用户点击重置按钮
    const handleReset = () => {
      formData.value = formOriginData;
    };
    return {
      formData,
      handleReset,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-title {
  margin: 0;
  font-size: 20px;
  font-weight: normal;
}
</style>
