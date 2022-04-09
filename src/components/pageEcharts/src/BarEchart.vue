<!--
 * @Author: qin
 * @Date: 2022-04-09 20:03:23
 * @LastEditTime: 2022-04-09 20:26:31
 * @FilePath: \vue3_cms\src\components\pageEcharts\src\BarEchart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import * as echarts from 'echarts';

import BaseEchart from '@/base-ui/echart';

export default defineComponent({
  name: 'BarEchart',
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
  components: {
    BaseEchart,
  },
  setup(props) {
    const options = computed(() => {
      return {
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            inside: true,
            color: '#fff',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#999',
          },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' },
                  ],
                ),
              },
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
