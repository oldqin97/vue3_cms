<!--
 * @Author: qin
 * @Date: 2022-04-06 21:34:33
 * @LastEditTime: 2022-04-08 00:27:28
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
          <el-button type="primary" @click="handleConfirm"
            >确定</el-button
          >
          <el-button @click="handleCancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';

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

    pageName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref({});

    watch(
      () => props.defaultInfo,
      (n, o) => {
        console.log('enter');
        for (let item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = n[`${item.field}`];
        }
      },
    );

    // + 确定按钮的逻辑
    const store = useStore();
    const handleConfirm = () => {
      dialogVisible.value = false;

      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id,
        });
      } else {
        // 新建
        console.log(formData.value);

        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value },
        });
      }
    };

    const handleCancel = () => {
      dialogVisible.value = false;
    };

    return {
      dialogVisible,
      formData,
      handleConfirm,
      handleCancel,
    };
  },
});
</script>

<style lang="scss" scoped></style>
