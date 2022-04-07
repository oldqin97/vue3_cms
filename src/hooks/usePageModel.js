/*
 * @Author: qin
 * @Date: 2022-04-07 22:14:14
 * @LastEditTime: 2022-04-07 22:37:28
 * @FilePath: \vue3_cms\src\hooks\usePageModel.js
 *  -> The best way to explain it is to do it
 */
import { ref } from 'vue';

export default function usePageModel(newCb, editCb) {
  const pageModelRef = ref();
  const defaultInfo = ref({});

  const listenNewData = () => {
    defaultInfo.value = {};
    pageModelRef.value.dialogVisible = true;
    newCb && newCb();
  };
  const listenEdit = data => {
    pageModelRef.value.dialogVisible = true;
    defaultInfo.value = { ...data };
    editCb && editCb();
  };

  return [pageModelRef, defaultInfo, listenEdit, listenNewData];
}
