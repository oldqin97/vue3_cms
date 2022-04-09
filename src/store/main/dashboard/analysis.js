/*
 * @Author: qin
 * @Date: 2022-04-09 19:51:18
 * @LastEditTime: 2022-04-09 21:07:11
 * @FilePath: \vue3_cms\src\store\main\dashboard\analysis.js
 *  -> The best way to explain it is to do it
 */

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
} from '@/http/main/analysis/dashboard.js';

const dashboardModule = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    },
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryCountResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categorySaleResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryFavorResult.data);
      const addressGoodsResult = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsResult.data);
    },
  },
};

export default dashboardModule;
