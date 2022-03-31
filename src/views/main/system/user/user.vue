<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-30 23:37:36
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <!-- 分层设计 -->
    <page-search :form-config="formSearchConfig" />
    <page-content
      :content-table-config="contentTableConfig"
      :user-list="userList"
    ></page-content>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import PageSearch from '@/components/pageSearch';
import PageContent from '@/components/pageContent';

import formSearchConfig from './formConfig';
import contentTableConfig from './contentConfig';

export default defineComponent({
  name: 'user',
  components: { PageSearch, PageContent },
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    return {
      formSearchConfig,
      userList,
      contentTableConfig,
    };
  },
});
</script>

<style lang="scss" scoped></style>
