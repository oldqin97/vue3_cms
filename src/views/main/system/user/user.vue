<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-04-05 18:52:27
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
      page-name="user"
    ></page-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import PageSearch from '@/components/pageSearch';
import PageContent from '@/components/pageContent';

import formSearchConfig from './formConfig';
import contentTableConfig from './contentConfig';

import usePageSearch from '@/hooks/usePageSearch.js';

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();

    return {
      formSearchConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
    };
  },
});
</script>

<style lang="scss" scoped></style>
