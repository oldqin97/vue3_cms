<!--
 * @Author: qin
 * @Date: 2022-03-23 00:12:42
 * @LastEditTime: 2022-03-23 00:45:06
 * @FilePath: \vue3_cms\src\base-ui\breadcrumb\src\Breadcrumb.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }} </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped></style>
