<!--
 * @Author: qin
 * @Date: 2022-04-09 20:16:45
 * @LastEditTime: 2022-04-09 20:25:53
 * @FilePath: \vue3_cms\src\base-ui\echart\src\BaseEchart.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="base-echart">
    <div
      ref="echartDivRef"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watchEffect } from 'vue';

import useEchart from '../hooks/useEchart';

export default defineComponent({
  name: 'BaseEchart',
  props: {
    options: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '360px',
    },
  },
  setup(props) {
    const echartDivRef = ref();

    onMounted(() => {
      const { setOptions } = useEchart(echartDivRef.value);

      watchEffect(() => {
        setOptions(props.options);
      });
    });

    return {
      echartDivRef,
    };
  },
});
</script>

<style lang="scss" scoped></style>
