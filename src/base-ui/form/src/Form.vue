<!--
 * @Author: qin
 * @Date: 2022-03-22 17:48:03
 * @LastEditTime: 2022-04-01 16:48:07
 * @FilePath: \vue3_cms\src\base-ui\form\src\Form.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="oq-form">
    <div id="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <!-- el-input -->
              <template
                v-if="
                  item.type === 'input' || item.type === 'password'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="
                    handleValueChange($event, item.field)
                  "
                />
              </template>

              <!-- el-select -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="
                    handleValueChange($event, item.field)
                  "
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

              <!-- el-date-picker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="
                    handleValueChange($event, item.field)
                  "
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, ref, computed } from 'vue';

export default defineComponent({
  name: 'Form',
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
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

  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = computed({
    //   get: () => props.modelValue,
    //   // set: newValue => {
    //   //   console.log(123);
    //   //   emit('update:modelValue', newValue);
    //   // },
    // });

    // const formData = ref({ ...props.modelValue });
    // watch(
    //   formData,
    //   newValue => {
    //     emit('update:modelValue', newValue);
    //   },
    //   {
    //     deep: true,
    //   },
    // );

    const handleValueChange = (value, field) => {
      // console.log({
      //   ...props.modelValue,
      //   [field]: value,
      // });

      emit('update:modelValue', {
        ...props.modelValue,
        [field]: value,
      });
    };

    return {
      handleValueChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.oq-form {
  padding-top: 22px;
  /* .form-item {
    padding: 5px 30px;
  } */
  .footer {
    text-align: right;
    padding: 0 50px 20px 10px;
  }
}
</style>
