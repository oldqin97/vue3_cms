/*
 * @Author: qin
 * @Date: 2022-04-07 22:14:14
 * @LastEditTime: 2022-04-08 23:15:25
 * @FilePath: \vue3_cms\src\hooks\usePageModel.js
 *  -> The best way to explain it is to do it
 */
import { ref } from 'vue';

export default function usePageModel(newCb, editCb) {
  const pageModelRef = ref();
  const defaultInfo = ref({});

  const listenEdit = data => {
    pageModelRef.value.dialogVisible = true;
    defaultInfo.value = { ...data };
    editCb && editCb(data);
  };

  const listenNewData = () => {
    defaultInfo.value = {};
    pageModelRef.value.dialogVisible = true;
    newCb && newCb();
  };

  return [pageModelRef, defaultInfo, listenEdit, listenNewData];
}
