<!--
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-17 17:44:43
 * @FilePath: \vue3_cms\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {},
});
</script>

<style lang="scss" scoped>
.app{
  height: 100%;
}
</style>
