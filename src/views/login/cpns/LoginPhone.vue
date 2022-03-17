<!--
 * @Author: qin
 * @Date: 2022-03-17 21:13:23
 * @LastEditTime: 2022-03-17 22:22:25
 * @FilePath: \vue3_cms\src\views\login\cpns\LoginPhone.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <el-form label-width="75px">
    <el-form-item label="手机号码">
      <el-input v-model="phone.numberPhone" />
    </el-form-item>

    <el-form-item label="验证码">
      <div class="get-code">
        <el-input v-model="phone.validateCode" />
        <el-button @click="getCode" type="primary" class="get-btn"
          >获取验证码</el-button
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phone = reactive({
      numberPhone: '',
      validateCode: '',
    });
    const getCode = () => {
      console.log('获取验证码');
    };

    return {
      phone,
      getCode,
    };
  },
});
</script>

<style lang="scss" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>
