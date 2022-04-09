<!--
 * @Author: qin
 * @Date: 2022-04-09 21:11:55
 * @LastEditTime: 2022-04-09 21:29:46
 * @FilePath: \vue3_cms\src\components\pageEcharts\src\PieEChart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="pie-chart">
    <base-echart :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import BaseEchart from '../../../base-ui/echart/src/BaseEchart.vue';

export default defineComponent({
  name: 'PieChart',
  components: { BaseEchart },
  props: ['pieData'],

  setup(props) {
    const options = computed(() => {
      return {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'horizontal',
          left: 'left',
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
    });
    return {
      options,
    };
  },
});
</script>

<style lang="scss" scoped></style>
