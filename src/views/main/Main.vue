<!--
 * @Author: qin
 * @Date: 2022-03-18 17:41:48
 * @LastEditTime: 2022-03-28 23:39:35
 * @FilePath: \vue3_cms\src\views\main\Main.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '55px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>

      <el-container class="page">
        <!-- 标题栏 -->
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <!-- 内容区 -->
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
import NavHeader from '@/components/navHeader';

export default defineComponent({
  name: 'Main',
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapse = ref(false);
    const handleFoldChange = isFold => {
      isCollapse.value = isFold;
    };

    return {
      isCollapse,
      handleFoldChange,
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  padding: 15px;
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
