<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-04-08 16:08:43
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <!-- 分层设计 -->
    <page-search
      :form-config="formSearchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
      @newBtnClick="listenNewData"
      @editBtnClick="listenEdit"
    ></page-content>

    <page-model
      ref="pageModelRef"
      :default-info="defaultInfo"
      :modal-config="modalConfigComputed"
      page-name="users"
    ></page-model>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import PageSearch from '@/components/pageSearch';
import PageContent from '@/components/pageContent';
import PageModel from '@/components/pageModel';

import formSearchConfig from './formConfig';
import contentTableConfig from './contentConfig';
import modalConfig from './model.config';
import usePageSearch from '@/hooks/usePageSearch.js';
import usePageModel from '@/hooks/usePageModel.js';

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent, PageModel },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();

    // + 动态添加部门和角色列表
    const store = useStore();
    const modalConfigComputed = computed(() => {
      const departMentItem = modalConfig.formItems.find(
        item => item.field === 'departmentId',
      );
      departMentItem.options = store.state.entireDepartment.map(
        item => ({ title: item.name, value: item.id }),
      );

      const roleItem = modalConfig.formItems.find(
        item => item.field === 'roleId',
      );
      roleItem.options = store.state.entireRole.map(item => ({
        title: item.name,
        value: item.id,
      }));
      return modalConfig;
    });

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        item => item.field === 'password',
      );
      passwordItem.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        item => item.field === 'password',
      );
      passwordItem.isHidden = true;
    };
    const [pageModelRef, defaultInfo, listenEdit, listenNewData] =
      usePageModel(newCallback, editCallback);

    return {
      defaultInfo,
      formSearchConfig,
      contentTableConfig,
      pageContentRef,
      modalConfigComputed,
      pageModelRef,
      handleResetClick,
      handleQueryClick,
      listenNewData,
      listenEdit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
