<!--
 * @Author: qin
 * @Date: 2022-03-20 21:01:24
 * @LastEditTime: 2022-03-30 00:17:02
 * @FilePath: \vue3_cms\src\views\main\system\user\user.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user">
    <div class="search">
      <page-search :form-config="formConfig" />
    </div>
    <div class="content">
      <table-cpn :user-list="userList" :props-list="propsList" />
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

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '50' },
      { prop: 'createAt', label: '创建事件', minWidth: '200' },
      { prop: 'updateAt', label: '更新事件', minWidth: '200' },
    ];
    return {
      formConfig,
      userList,
      propsList,
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
