<!--
 * @Author: qin
 * @Date: 2022-03-19 23:38:26
 * @LastEditTime: 2022-03-30 16:30:27
 * @FilePath: \vue3_cms\src\components\navHeader\NavHeader.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="nav-header">
    <i
      style="font-size: 30px; cursor: pointer"
      class="iconfont"
      :class="isFold ? 'icon-s-unfold' : 'icon-s-fold'"
      @click="handleFoldClick"
    >
    </i>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import { pathMapBreadcrumbs } from '@/utils/MapMenus.js';

import UserInfo from '@/components/navHeader/UserInfo.vue';
import Breadcrumb from '@/base-ui/breadcrumb';

export default defineComponent({
  name: 'navHeader',
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };

    // + 面包屑数据 [{}]
    const store = useStore();

    const userMenus = store.state.login.userMenus;

    const breadcrumbs = computed(() => {
      const currentPath = useRoute().path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return {
      isFold,
      breadcrumbs,
      handleFoldClick,
    };
  },
  components: { UserInfo, Breadcrumb },
});
</script>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
