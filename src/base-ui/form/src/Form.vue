<!--
 * @Author: qin
 * @Date: 2022-03-22 17:48:03
 * @LastEditTime: 2022-03-22 23:46:19
 * @FilePath: \vue3_cms\src\base-ui\form\src\form.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="oq-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="
                  item.type === 'input' || item.type === 'password'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Form',
  props: {
    formItems: {
      type: Array,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: '100px',
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 50px' }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // > 1920px 4
        lg: 8, // > 1200px 3
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
});
</script>

<style lang="scss" scoped>
.oq-form {
  padding-top: 22px;
  /* .form-item {
    padding: 5px 30px;
  } */
}
</style>
