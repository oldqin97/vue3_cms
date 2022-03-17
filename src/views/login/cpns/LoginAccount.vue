<!--
 * @Author: qin
 * @Date: 2022-03-17 19:20:45
 * @LastEditTime: 2022-03-17 23:31:19
 * @FilePath: \vue3_cms\src\views\login\cpns\LoginAccount.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="account"
      ref="formRef"
    >
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
import { defineComponent, reactive, ref } from 'vue';

// + 表单验证规则
import { rules } from '../config';
import localCache from '@/utils/Cache.js';

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? undefined,
      password: localCache.getCache('password') ?? undefined,
    });

    const formRef = ref(null);

    // + 登录验证函数

    // + 登录函数
    const loginAction = isKeepPasswordTag => {
      formRef.value.validate(valid => {
        if (valid) {
          // + 判断是否需要记住密码
          if (isKeepPasswordTag) {
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('password');
          }
          // + 开始登录验证
        }
      });
    };

    return {
      account,
      rules,
      formRef,
      loginAction,
    };
  },
});
</script>

<style lang="scss" scoped></style>
