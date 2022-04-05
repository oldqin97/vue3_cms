<!--
 * @Author: qin
 * @Date: 2022-03-20 21:04:39
 * @LastEditTime: 2022-04-06 01:30:05
 * @FilePath: \vue3_cms\src\views\main\system\menu\Menu.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="menu">
    <page-content
      :contentTableConfig="menuConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import pageContent from '@/components/pageContent/src/pageContent.vue';

import menuConfig from './config/menuConfig';

export default defineComponent({
  name: 'oq-menu',
  components: { pageContent },
  setup() {
    return {
      menuConfig,
    };
  },
});
</script>

<style scoped></style>
