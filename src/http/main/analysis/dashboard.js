/*
 * @Author: qin
 * @Date: 2022-04-09 19:53:02
 * @LastEditTime: 2022-04-09 20:37:41
 * @FilePath: \vue3_cms\src\http\main\analysis\dashboard.js
 *  -> The best way to explain it is to do it
 */

import { oqRequest } from '../../index';

const dashboardApi = {
  categoryGoodsCount: '/goods/category/count',
  categoryGoodsSale: '/goods/category/sale',
  categoryGoodsFavor: '/goods/category/favor',
  addressGoodsSale: '/goods/address/sale',
};

export function getCategoryGoodsCount() {
  return oqRequest.get({
    url: dashboardApi.categoryGoodsCount,
  });
}

export function getCategoryGoodsSale() {
  return oqRequest.get({
    url: dashboardApi.addressGoodsSale,
  });
}

export function getCategoryGoodsFavor() {
  return oqRequest.get({
    url: dashboardApi.categoryGoodsFavor,
  });
}

export function getAddressGoodsSale() {
  return oqRequest.get({
    url: dashboardApi.addressGoodsSale,
  });
}
