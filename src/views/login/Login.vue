<!--
 * @Author: qin
 * @Date: 2022-03-16 23:36:04
 * @LastEditTime: 2022-03-17 17:48:56
 * @FilePath: \vue3_cms\src\views\login\Login.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginPanel from './cpns/LoginPanel.vue';

export default defineComponent({
  name: 'Home',
  components: { LoginPanel },
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
