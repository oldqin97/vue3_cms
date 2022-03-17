<!--
 * @Author: qin
 * @Date: 2022-03-17 19:20:45
 * @LastEditTime: 2022-03-17 21:57:37
 * @FilePath: \vue3_cms\src\views\login\cpns\LoginAccount.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/account-config';

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const account = reactive({
      name: '',
      password: '',
    });

    // + 表单验证规则

    return {
      account,
      rules,
    };
  },
});
</script>

<style lang="scss" scoped></style>
