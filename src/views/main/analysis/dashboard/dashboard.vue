<!--
 * @Author: qin
 * @Date: 2022-04-06 01:54:20
 * @LastEditTime: 2022-04-09 00:46:48
 * @FilePath: \vue3_cms\src\views\main\analysis\dashboard\dashboard.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="dashboard">
    <div ref="tableRef" style="width: 500px; height: 300px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'dashboard',
  setup() {
    const tableRef = ref();
    onMounted(() => {
      const echartsInstance = echarts.init(tableRef.value, 'light', {
        renderer: 'svg',
      });

      
    });

    return {
      tableRef,
    };
  },
});
</script>

<style scoped></style>
