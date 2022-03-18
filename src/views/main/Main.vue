<!--
 * @Author: qin
 * @Date: 2022-03-18 17:41:48
 * @LastEditTime: 2022-03-18 18:44:19
 * @FilePath: \vue3_cms\src\views\main\Main.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
});
</script>

<style lang="scss" scoped></style>
