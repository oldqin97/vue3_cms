<!--
 * @Author: qin
 * @Date: 2022-03-16 23:36:11
 * @LastEditTime: 2022-03-16 23:36:11
 * @FilePath: \vue3_cms\src\views\About.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div>
    <el-icon :size="50" color="orange">
      <edit />
    </el-icon>
    <el-icon :size="50" color="orange">
      <arrow-left-bold />
    </el-icon>
  </div>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
});
</script>

<style lang="scss" scoped></style>
