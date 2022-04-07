<!--
 * @Author: qin
 * @Date: 2022-04-06 21:34:33
 * @LastEditTime: 2022-04-07 22:25:52
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
      destroy-on-close
    >
      <oq-form v-bind="modalConfig" v-model="formData"></oq-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

import OqForm from '@/base-ui/form';
export default defineComponent({
  name: 'PageModel',
  components: { OqForm },

  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref({});

    watch(
      () => props.defaultInfo,
      (n, o) => {
        for (let item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = n[`${item.field}`];
        }
      },
    );

    return {
      dialogVisible,
      formData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
