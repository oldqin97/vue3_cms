<!--
 * @Author: qin
 * @Date: 2022-03-18 21:54:35
 * @LastEditTime: 2022-03-18 22:41:29
 * @FilePath: \vue3_cms\src\components\navMenu\src\navMenu.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="logo-title">CMS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc"
      active-text-color="#0a60bd"
    ></el-menu>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'navMenu',
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // + store
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);

    // + router
    const router = useRouter();
    const route = useRoute();
    const currentPath = route.path;

    // + data
    const menu = '';
    const defaultValue = ref();
  },
});
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 10px 8px 10px;
    height: 28px;

    .logo-img {
      height: 100%;
      margin: 0 10px;
    }
    .logo-title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
