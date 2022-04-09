<!--
 * @Author: qin
 * @Date: 2022-04-09 21:20:18
 * @LastEditTime: 2022-04-09 21:22:46
 * @FilePath: \vue3_cms\src\components\pageEcharts\src\RoseEchart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="rose-echart">
    <base-echart :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import BaseEchart from '../../../base-ui/echart/src/BaseEchart.vue';

export default defineComponent({
  name: 'RoseEchart',
  components: { BaseEchart },
  props: ['roseData'],

  setup(props) {
    const options = computed(() => {
      return {
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: '类别数据',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8,
            },
            data: props.roseData,
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
