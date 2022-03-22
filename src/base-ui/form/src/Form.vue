<!--
 * @Author: qin
 * @Date: 2022-03-22 17:48:03
 * @LastEditTime: 2022-03-22 19:01:01
 * @FilePath: \vue3_cms\src\base-ui\form\src\form.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="oq-from">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
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
                <el-select :placeholder="item.placeholder">
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
  },
});
</script>

<style lang="scss" scoped></style>
