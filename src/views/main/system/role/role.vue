<template>
  <div class="role">
    <page-search :form-config="searchFormConfig"></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      page-name="role"
    ></page-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import pageContent from '@/components/pageContent';
import PageSearch from '@/components/pageSearch';

import { contentTableConfig } from './config/contentConfig';
import { searchFormConfig } from './config/searchConfig';

export default defineComponent({
  name: 'role',
  components: { pageContent, PageSearch },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
