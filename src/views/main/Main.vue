<!--
 * @Author: qin
 * @Date: 2022-03-18 17:41:48
 * @LastEditTime: 2022-03-18 22:54:49
 * @FilePath: \vue3_cms\src\views\main\Main.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { NavMenu } from '@/components/navMenu';

export default defineComponent({
  name: 'Main',
  components: { NavMenu },
  setup() {
    const isCollapse = ref(false);

    return {
      isCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 50px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 50px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
