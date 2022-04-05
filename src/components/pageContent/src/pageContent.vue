<!--
 * @Author: qin
 * @Date: 2022-03-30 23:17:50
 * @LastEditTime: 2022-04-06 01:38:38
 * @FilePath: \vue3_cms\src\components\pageContent\src\pageContent.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="page-content">
    <table-cpn
      v-bind="contentTableConfig"
      :list-data="dataList"
      :list-count="dataCount"
      v-model:page="pageInfo"
    >
      <template #status="{ rowData }">
        <el-button
          plain
          size="small"
          :type="
            rowData.enable || rowData.status === 1
              ? 'success'
              : 'danger'
          "
          >{{
            rowData.enable || rowData.status === 1 ? '启用' : '禁用'
          }}</el-button
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
          <el-button icon="edit" size="small" type="text"
            >编辑</el-button
          >
          <el-button icon="delete" size="small" type="text"
            >删除</el-button
          >
        </div>
      </template>

      <template #headerHandler>
        <el-button type="primary" size="small">新建用户</el-button>
      </template>

      <!-- 动态插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="{ rowData }"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :rowData="rowData"></slot>
        </template>
      </template>
    </table-cpn>
  </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from 'vue';
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
  setup({ pageName, contentTableConfig }) {
    // + 发送网络请求
    const store = useStore();

    // + 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData(), { deep: true });

    const getPageData = queryInfo => {
      store.dispatch('system/getPageListAction', {
        pageName,
        queryInfo: {
          offset:
            pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo,
        },
      });
    };
    getPageData();

    // const userList = computed(() => store.state.system.userList);
    //+ 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](pageName),
    );
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](pageName),
    );
    console.log(dataList.value);

    // + 获取其他的动态插槽名称
    const otherPropsSlots = contentTableConfig?.propsList.filter(
      item => {
        if (item.slotName === 'status') return false;
        if (item.slotName === 'createAt') return false;
        if (item.slotName === 'updateAt') return false;
        if (item.slotName === 'handler') return false;

        return true;
      },
    );

    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropsSlots,
      getPageData,
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
