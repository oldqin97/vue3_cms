/*
 * @Author: qin
 * @Date: 2022-04-05 17:39:02
 * @LastEditTime: 2022-04-05 18:29:38
 * @FilePath: \vue3_cms\src\hooks\usePageSearch.js
 *  -> The best way to explain it is to do it
 */

import { ref } from 'vue';

export default function usePageSearch() {
  const operatorRef = ref();

  const handleResetClick = () => {
    operatorRef.value?.getPageData();
  };
  const handleQueryClick = queryInfo => {
    operatorRef.value?.getPageData(queryInfo);
  };

  return [operatorRef, handleResetClick, handleQueryClick];
}
