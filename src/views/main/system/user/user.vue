<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-30 22:21:42
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <div class="search">
      <page-search :form-config="formConfig" />
    </div>
    <div class="content">
      <table-cpn
        :show-index-column="showIndexColumn"
        :show-select-column="showSelectColumn"
        :title="title"
        :list-data="userList"
        :props-list="propsList"
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
            <el-button icon="edit" size="small" type="text" plain
              >编辑</el-button
            >
            <el-button icon="delete" size="small" type="text" plain
              >删除</el-button
            >
          </div>
        </template>

        <template #headerHandler>
          <el-button type="primary" size="small">新建用户</el-button>
        </template>
      </table-cpn>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import PageSearch from '@/components/pageSearch';
import TableCpn from '@/base-ui/table';

import formConfig from './formConfig';

export default defineComponent({
  name: 'user',
  components: { PageSearch, TableCpn },
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });

    const title = '用户列表';

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '70' },
      { prop: 'realname', label: '真实姓名', minWidth: '70' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      {
        prop: 'enable',
        label: '状态',
        minWidth: '50',
        slotName: 'status',
      },
      {
        prop: 'createAt',
        label: '创建事件',
        minWidth: '130',
        slotName: 'createAt',
      },
      {
        prop: 'updateAt',
        label: '更新事件',
        minWidth: '130',
        slotName: 'updateAt',
      },
      {
        label: '操作',
        miniWidth: '100',
        slotName: 'handler',
      },
    ];

    const showIndexColumn = true;
    const showSelectColumn = true;
    return {
      title,
      formConfig,
      userList,
      propsList,
      showIndexColumn,
      showSelectColumn,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
