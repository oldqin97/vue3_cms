<!--
 * @Author: qin
 * @Date: 2022-03-16 20:49:37
 * @LastEditTime: 2022-03-16 23:23:50
 * @FilePath: \vue3_cms\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div>
    <h2>App</h2>

    <el-button @click="getData">getData</el-button>
    <el-button @click="cancelHttp">cancelHttp</el-button>
  </div>
</template>

<script >
import { defineComponent } from 'vue';
// import oqRequest from './http';
import { oqRequest, cancelRequest } from '@/http'

export default defineComponent({
  name: 'App',
  setup() {

    const getData = () => {
      oqRequest.request({
        url: '/home/multidata',
        method: 'GET',
        // hooks: {
        //   requestInterceptor(config) {
        //     console.log('单独处理的request')
        //     return config
        //   },
        //   responseInterceptor(res) {
        //     console.log('单独出来的response')
        //     return res
        //   }
        // },
        isCancelRequest: true
      }).then(res => {
        console.log(res)
      })

    }
    const cancelHttp = () => {
      cancelRequest('/home/multidata')
    }
    return {
      getData,
      cancelHttp
    }
  },
});
</script>

<style lang="scss" scoped></style>
