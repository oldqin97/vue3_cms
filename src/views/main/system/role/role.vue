<!--
 * @Author: qin
 * @Date: 2022-04-06 01:54:20
 * @LastEditTime: 2022-04-08 23:47:42
 * @FilePath: \vue3_cms\src\views\main\system\role\role.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="role">
    <page-search
      :form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="role"
      @newBtnClick="listenNewData"
      @editBtnClick="listenEdit"
    ></page-content>

    <page-model
      ref="pageModelRef"
      :modalConfig="pageModelConfig"
      :default-info="defaultInfo"
      :otherInfo="otherInfo"
      page-name="role"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, ref } from 'vue';
import { useStore } from 'vuex';

import pageContent from '@/components/pageContent';
import PageSearch from '@/components/pageSearch';
import PageModel from '@/components/pageModel';

import { contentTableConfig } from './config/contentConfig';
import { searchFormConfig } from './config/searchConfig';
import pageModelConfig from './config/model.config';
import usePageSearch from '@/hooks/usePageSearch';
import usePageModel from '@/hooks/usePageModel';
import { menuMapLeafKeys } from '@/utils/MapMenus.js';

export default defineComponent({
  name: 'role',
  components: { pageContent, PageSearch, PageModel },
  setup() {
    const otherInfo = ref({});

    const store = useStore();
    const menus = computed(() => store.state.entireMenu);
    nextTick(() => {
      console.log(menus.value);
    });

    const handleCheckChange = (data1, data2) => {
      const { checkedKeys, halfCheckedKeys } = data2;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    const [pageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();

    // + 回显
    const elTreeRef = ref();
    const editCB = itemData => {
      console.log(itemData);
      const leafKeys = menuMapLeafKeys(itemData.menuList);
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const newCB = () => {
      elTreeRef.value?.setCheckedKeys([], false);
    };
    const [pageModelRef, defaultInfo, listenEdit, listenNewData] =
      usePageModel(newCB, editCB);
    return {
      elTreeRef,
      otherInfo,
      menus,
      pageModelRef,
      defaultInfo,
      listenEdit,
      listenNewData,
      pageContentRef,

      handleResetClick,
      handleQueryClick,
      contentTableConfig,
      searchFormConfig,
      pageModelConfig,
      handleCheckChange,
    };
  },
});
</script>

<style scoped lang="scss">
.menu-tree {
  margin-left: 20px;
}
</style>
