<!--
 * @Author: qin
 * @Date: 2022-03-20 21:06:32
 * @LastEditTime: 2022-04-05 23:57:14
 * @FilePath: \vue3_cms\src\views\main\product\goods\goods.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="goods">
    <page-content :contentTableConfig="goodsConfig" pageName="goods">
      <template #image="{ rowData }">
        <el-image
          style="width: 50px; height: 50px"
          :src="rowData.imgUrl"
          fit="cover"
          :preview-src-list="[rowData.imgUrl]"
          :preview-teleported="true"
        />
      </template>
      <template #oldPrice="{ rowData }">
        {{ '￥' + rowData.oldPrice }}
      </template>
      <template #newPrice="{ rowData }">
        {{ '￥' + rowData.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import pageContent from '@/components/pageContent/src/pageContent.vue';

import goodsConfig from './config/goodsConfig';
import PageContent from '../../../../components/pageContent/src/pageContent.vue';

export default defineComponent({
  name: 'goods',
  components: { pageContent, PageContent },
  setup(props) {
    return {
      goodsConfig,
    };
  },
});
</script>

<style scoped></style>
