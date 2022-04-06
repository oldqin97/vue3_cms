<!--
 * @Author: qin
 * @Date: 2022-04-06 21:34:33
 * @LastEditTime: 2022-04-06 22:00:13
 * @FilePath: \vue3_cms\src\components\pageModel\src\PageModel.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
    >
      <oq-form v-bind="modalConfig" v-model="formData"></oq-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
          <el-button @click="dialogVisible = false">Cancel</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import OqForm from '@/base-ui/form';
export default defineComponent({
  name: 'PageModel',
  components: { OqForm },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
  },
  setup({ modalConfig }) {
    const dialogVisible = ref(false);
    const formData = ref({});

    return {
      dialogVisible,
      formData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
