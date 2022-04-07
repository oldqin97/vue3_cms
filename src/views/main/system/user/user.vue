<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-04-07 22:18:10
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
      :modal-config="modalConfig"
    ></page-model>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

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

    const [pageModelRef, defaultInfo, listenEdit, listenNewData] =
      usePageModel();

    return {
      defaultInfo,
      formSearchConfig,
      contentTableConfig,
      pageContentRef,
      modalConfig,
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
