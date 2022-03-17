<!--
 * @Author: qin
 * @Date: 2022-03-17 17:48:02
 * @LastEditTime: 2022-03-17 23:21:20
 * @FilePath: \vue3_cms\src\views\login\cpns\LoginPanel.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span class="icon-wrapper">
              <el-icon><user /></el-icon>
            </span>
            <span>登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span class="icon-wrapper">
              <el-icon><iphone /></el-icon>
            </span>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="login-btn"
      @click="handleClickLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import LoginPhone from './LoginPhone.vue';
import LoginAccount from './LoginAccount.vue';

export default defineComponent({
  name: 'LoginPanel',
  components: { LoginPhone, LoginAccount },
  setup() {
    const isKeepPassword = ref(true);

    const accountRef = ref(null);

    const handleClickLogin = () => {
      accountRef.value.loginAction(isKeepPassword.value);
    };
    return {
      isKeepPassword,
      accountRef,
      handleClickLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .custom-tabs-label {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-wrapper {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
