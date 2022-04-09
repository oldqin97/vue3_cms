<!--
 * @Author: qin
 * @Date: 2022-04-09 20:55:36
 * @LastEditTime: 2022-04-09 21:07:14
 * @FilePath: \vue3_cms\src\components\pageEcharts\src\LineEchart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="line-echart">
    <base-echart :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue';
import BaseEchart from '../../../base-ui/echart';

export default defineComponent({
  name: 'LineEchart',
  components: { BaseEchart },
  props: {
    title: {
      type: String,
      default: '',
    },
    xLabels: {
      type: Array,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const options = computed(() => {
      return {
        title: {
          text: props.title,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.xLabels,
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '分别销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: props.values,
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
