<!--
 * @Author: qin
 * @Date: 2022-04-09 20:30:49
 * @LastEditTime: 2022-04-09 20:31:59
 * @FilePath: \vue3_cms\src\base-ui\card\src\Card.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
});
</script>

<style lang="scss" scoped>
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
  // border: 1px solid red;
}
</style>
