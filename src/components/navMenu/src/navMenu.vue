<!--
 * @Author: qin
 * @Date: 2022-03-18 21:54:35
 * @LastEditTime: 2022-03-29 22:07:25
 * @FilePath: \vue3_cms\src\components\navMenu\src\navMenu.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="logo-title">CMS</span>
    </div>

    <el-menu
      active-text-color="#0a60bd"
      background-color="#0c2135"
      class="el-menu-vertical"
      :default-active="defaultValue"
      text-color="#b7bdc3"
      :unique-opened="false"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <component
                class="menu-icon"
                style="width: 1.5em"
                :is="item.icon.split('-').pop()"
              />
              <span>{{ item.name }}</span>
            </template>

            <template
              v-for="subitem in item.children"
              :key="subitem.id"
            >
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

import { pathMapToMenu } from '@/utils/MapMenus.js';

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
    const menu = pathMapToMenu(userMenus.value, currentPath);

    const defaultValue = ref((menu?.id ?? 2) + '');

    const handleMenuItemClick = item => {
      router.push({
        path: item.url ?? '/not-found',
      });
    };

    return {
      userMenus,
      defaultValue,
      handleMenuItemClick,
    };
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
      user-select: none;
    }
  }
  .el-menu-vertical {
    border-right: none;
    .menu-icon {
      margin-right: 10px;
    }
  }
}
</style>
