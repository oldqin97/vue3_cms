<!--
 * @Author: qin
 * @Date: 2022-03-22 00:11:36
 * @LastEditTime: 2022-03-22 00:32:48
 * @FilePath: \vue3_cms\src\components\navHeader\UserInfo.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="20"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          class="user-avatar"
        />
        <span>{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="close">退出登录</el-dropdown-item>
          <el-dropdown-item divided icon="user"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item icon="cpu">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue';

import { useStore } from 'vuex';

export default defineComponent({
  name: 'UserInfo',
  setup() {
    const store = useStore();
    const name = computed(() => store.state.login.userInfo.name);

    return {
      name,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-info {
  cursor: pointer;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    .user-avatar {
      margin-right: 5px;
    }
  }
}
</style>
