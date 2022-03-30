<!--
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-30 22:44:42
 * @FilePath: \vue3_cms\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import { zhCn } from 'element-plus/lib/locale';

export default defineComponent({
  name: 'App',
  components: { ElConfigProvider },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>
