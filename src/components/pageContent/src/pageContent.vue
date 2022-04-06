<!--
 * @Author: qin
 * @Date: 2022-03-30 23:17:50
 * @LastEditTime: 2022-04-06 22:09:10
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
      @selectData="getSelectData"
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

      <template #headerHandler v-if="isCreate">
        <el-button type="primary" size="small" @click="handleNewUser"
          >新建用户</el-button
        >
      </template>

      <template #handler="{ rowData }">
        <div class="handler-btns">
          <el-button
            icon="edit"
            size="small"
            type="text"
            v-if="isUpdate"
            @click="handleEdit(rowData)"
            >编辑</el-button
          >
          <el-button
            icon="delete"
            size="small"
            type="text"
            v-if="isDelete"
            @click="handleDelete(rowData)"
            >删除</el-button
          >
        </div>
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

import { ElMessage, ElMessageBox } from 'element-plus';
import { usePermissions } from '@/hooks/usePermissions.js';

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
  emits: ['newBtnClick', 'editBtnClick'],
  setup({ pageName, contentTableConfig }, { emit }) {
    // + 发送网络请求
    const store = useStore();

    // + 获取操作权限
    const isCreate = usePermissions(pageName, 'create');
    const isUpdate = usePermissions(pageName, 'update');
    const isDelete = usePermissions(pageName, 'delete');
    const isQuery = usePermissions(pageName, 'query');

    // + 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(pageInfo, () => getPageData(), { deep: true });

    const getPageData = queryInfo => {
      if (!isQuery) {
        console.log('enter');
        return;
      }
      store.dispatch('system/getPageListAction', {
        pageName,
        queryInfo: {
          offset:
            (pageInfo.value.currentPage - 1) *
            pageInfo.value.pageSize,
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

    // + 获取选择数据
    const getSelectData = data => {
      console.log(data);
    };

    // + 删除
    const handleDelete = async itemData => {
      try {
        await ElMessageBox.confirm('是否删除该用户', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        });
        let { code, data } = await store.dispatch(
          'system/deletePageDataAction',
          {
            pageName,
            id: itemData.id,
          },
        );
        if (code === -1002) {
          ElMessage({
            type: 'warning',
            message: data,
          });
        } else {
          ElMessage({
            type: 'success',
            message: data,
          });
        }
      } catch (cancel) {
        ElMessage({
          type: 'info',
          message: '取消',
        });
      }
    };

    // + 修改
    const handleEdit = async itemData => {
      emit('editBtnClick', itemData);
    };

    // + 新建
    const handleNewUser = () => {
      emit('newBtnClick');
    };

    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropsSlots,
      isCreate,
      isUpdate,
      isDelete,
      getSelectData,
      handleDelete,
      handleEdit,
      getPageData,
      handleNewUser,
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
