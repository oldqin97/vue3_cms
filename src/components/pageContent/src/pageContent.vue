<!--
 * @Author: qin
 * @Date: 2022-03-30 23:17:50
 * @LastEditTime: 2022-03-31 18:01:26
 * @FilePath: \vue3_cms\src\components\pageContent\src\pageContent.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="page-content">
    <table-cpn
      v-bind="contentTableConfig"
      :list-data="dataList"
      :list-count="dataCount"
    >
      <template #status="{ rowData }">
        <el-button
          plain
          size="small"
          :type="rowData.enable === 1 ? 'success' : 'danger'"
          >{{ rowData.enable === 1 ? '启用' : '禁用' }}</el-button
        >
      </template>

      <template #createAt="{ rowData }">
        <span>{{ $filters.formatTime(rowData.createAt) }}</span>
      </template>

      <template #updateAt="{ rowData }">
        <span>{{ $filters.formatTime(rowData.updateAt) }}</span>
      </template>

      <template #handler>
        <div class="handler-btns">
          <el-button
            icon="edit"
            size="small"
            type="primary"
            plain
            >编辑</el-button
          >
          <el-button
            icon="delete"
            size="small"
            type="danger"
            plain
            >删除</el-button
          >
        </div>
      </template>

      <template #headerHandler>
        <el-button type="primary" size="small">新建用户</el-button>
      </template>
    </table-cpn>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import TableCpn from '@/base-ui/table';

export default defineComponent({
  name: 'pageContent',
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  components: { TableCpn },
  setup({ pageName }) {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });

    // const userList = computed(() => store.state.system.userList);

    const dataList = computed(() =>
      store.getters[`system/pageListData`](pageName),
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](pageName),
    );

    return {
      dataList,
      dataCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
