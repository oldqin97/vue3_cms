<!--
 * @Author: qin
 * @Date: 2022-04-09 21:31:58
 * @LastEditTime: 2022-04-09 21:44:17
 * @FilePath: \vue3_cms\src\components\pageEcharts\src\mapEchart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

import BaseEchart from '../../../base-ui/echart/src/BaseEchart.vue';

import { convertData } from '../utils/convert-data';

export default defineComponent({
  name: 'mapEchart',
  components: { BaseEchart },
  props: {
    title: {
      type: String,
      default: '',
    },
    mapData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const options = computed(() => {
      return {
        backgroundColor: '#fff',
        title: {
          text: '全国销量统计',
          left: 'center',
          textStyle: {
            color: '#fff',
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value[2];
          },
        },
        visualMap: {
          min: 0,
          max: 60000,
          left: 20,
          bottom: 20,
          calculable: true,
          text: ['高', '低'],
          inRange: {
            color: [
              'rgb(70, 240, 252)',
              'rgb(250, 220, 46)',
              'rgb(245, 38, 186)',
            ],
          },
          textStyle: {
            color: '#fff',
          },
        },
        geo: {
          map: 'china',
          roam: 'scale',
          emphasis: {
            areaColor: '#f4cccc',
            borderColor: 'rgb(9, 54, 95)',
            itemStyle: {
              areaColor: '#f4cccc',
            },
          },
        },
        series: [
          {
            name: '销量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(props.mapData),
            symbolSize: 12,
            emphasis: {
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
            },
          },
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75,
            tooltip: {
              show: false,
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
