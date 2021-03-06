<!--
 * @Author: qin
 * @Date: 2022-03-30 00:15:13
 * @LastEditTime: 2022-04-06 10:57:16
 * @FilePath: \vue3_cms\src\base-ui\table\src\Table.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="oq-header">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="listData"
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>

      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="50"
      ></el-table-column>

      <template v-for="item in propsList" :key="item.prop">
        <el-table-column
          v-bind="item"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scopeData">
            <slot :name="item.slotName" :rowData="scopeData.row">
              {{ scopeData.row[item.prop] }}
            </slot>
            <!-- <el-button>{{ scopeData.row[item.prop] }}</el-button> -->
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        ></el-pagination>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'oq-table',
  props: {
    listCount: {
      type: Number,
      default: 0,
    },
    listData: {
      type: Object,
      required: true,
    },
    page: {
      type: Object,
      default: _ => ({ currentPage: 0, pageSize: 10 }),
    },
    title: {
      type: String,
      default: '',
    },

    propsList: {
      type: Object,
      required: true,
    },
    showIndexColumn: {
      type: Boolean,
      default: false,
    },
    showSelectColumn: {
      type: Boolean,
      default: false,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    childrenProps: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['selectData', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = rowData => {
      emit('selectData', rowData);
    };
    const handleSizeChange = pageSize => {
      emit('update:page', { ...props.page, pageSize });
    };
    const handleCurrentChange = currentPage => {
      emit('update:page', { ...props.page, currentPage });
    };
    return {
      handleSelectChange,
      handleCurrentChange,
      handleSizeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 5px;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  display: flex;
  justify-content: end;
}
</style>
