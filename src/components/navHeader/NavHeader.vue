<!--
 * @Author: qin
 * @Date: 2022-03-19 23:38:26
 * @LastEditTime: 2022-03-20 17:58:37
 * @FilePath: \vue3_cms\src\components\navHeader\navHeader.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="nav-header">
    <i
      style="font-size: 25px; cursor: pointer"
      class="iconfont"
      :class="isFold ? 'icon-s-unfold' : 'icon-s-fold'"
      @click="handleFoldClick"
    >
    </i>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

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
});
</script>

<style lang="scss" scoped></style>
