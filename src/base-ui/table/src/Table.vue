<!--
 * @Author: qin
 * @Date: 2022-03-30 00:15:13
 * @LastEditTime: 2022-03-30 00:18:04
 * @FilePath: \vue3_cms\src\base-ui\table\src\table.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div>
    <el-table :data="userList" border style="width: 100%">
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          v-bind="item"
          align="center"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'table',
  props: {
    userList: {
      type: Object,
      required: true,
    },
    propsList: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
