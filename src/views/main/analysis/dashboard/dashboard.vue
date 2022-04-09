<!--
 * @Author: qin
 * @Date: 2022-04-06 01:54:20
 * @LastEditTime: 2022-04-09 21:43:34
 * @FilePath: \vue3_cms\src\views\main\analysis\dashboard\dashboard.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <oq-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount" />
        </oq-card>
      </el-col>
      <el-col :span="10">
        <oq-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale" />
        </oq-card>
      </el-col>
      <el-col :span="7">
        <oq-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount" />
        </oq-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <oq-card title="'分类商品销量">
          <line-echart v-bind="categoryGoodsSale" />
        </oq-card>
      </el-col>
      <el-col :span="12">
        <oq-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" />
        </oq-card>
      </el-col>
    </el-row>
    <!-- <button @click="handleChangeData">changeData</button> -->
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import OqCard from '@/base-ui/card';
import {
  BarEchart,
  LineEchart,
  PieEchart,
  RoseEchart,
  MapEchart,
} from '@/components/pageEcharts';

export default defineComponent({
  name: 'dashboard',
  components: {
    OqCard,
    BarEchart,
    LineEchart,
    PieEchart,
    RoseEchart,
    MapEchart,
  },
  setup() {
    const store = useStore();

    store.dispatch('dashboard/getDashboardDataAction');

    // const handleChangeData = () => {
    //   const categoryGoodsSale =
    //     store.state.dashboard.categoryGoodsSale;

    //   categoryGoodsSale[11].count = 50000;
    // };

    // pie / rose
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map(item => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    // line
    const categoryGoodsSale = computed(() => {
      const xLabels = [];
      const values = [];

      const categoryGoodsSale =
        store.state.dashboard.categoryGoodsSale;

      for (let item of categoryGoodsSale) {
        xLabels.push(item.address);
        values.push(item.count);
      }

      return { xLabels, values };
    });

    // bar
    const categoryGoodsFavor = computed(() => {
      const xLabels = [];
      const values = [];
      const categoryGoodsFavor =
        store.state.dashboard.categoryGoodsFavor;

      for (let item of categoryGoodsFavor) {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      }
      return { xLabels, values };
    });

    // map
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map(item => {
        return { name: item.address, value: item.count };
      });
    });

    return {
      categoryGoodsFavor,
      categoryGoodsSale,
      categoryGoodsCount,
      addressGoodsSale,
    };
  },
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
