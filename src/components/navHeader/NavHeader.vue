<!--
 * @Author: qin
 * @Date: 2022-03-19 23:38:26
 * @LastEditTime: 2022-03-22 00:15:42
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
      <div>面板屑</div>
      <user-info />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import UserInfo from '@/components/navHeader/UserInfo.vue';

export default defineComponent({
  name: 'navHeader',
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    return {
      isFold,
      handleFoldClick,
    };
  },
  components: { UserInfo },
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
