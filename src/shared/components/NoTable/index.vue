<template>
  <div class="no-table">
    <el-table
      ref="elTable"
      v-loading="loading"
      element-loading-text="加载中.."
      v-bind="$attrs"
      v-on="$listeners"
      @selection-change="handleSelectionChange"
    >
      <!-- 根据是否有 type 区分渲染渲染 是否有复选框、下标、扩展等 -->
      <template v-for="(column, index) in mergeColumns">
        <el-table-column
          v-if="column.type"
          :key="index"
          :prop="column.prop"
          :selectable="column.selectable"
          :label="column.label"
          :type="column.type"
          :width="column.width"
          :fixed="column.fixed"
          :align="column.align"
        >
      </el-table-column>
      </template>

      <!-- 根据type区分渲染 -->
      <template v-for="(column, index) in mergeColumns">
        <el-table-column
          v-if="!column.type"
          :key="column.prop || ''+column.label+index"
          :type="column.type"
          :index="column.index"
          :label="column.label"
          :min-width="column.minWidth"
          :width="column.width"
          :fixed="column.fixed"
          :show-overflow-tooltip="column.showOverflowTooltip"
          :align="column.align"
        >
          <template slot-scope="scope">
            <no-table-render
              v-if="column.render"
              :index="scope.index"
              :row="scope.row"
              :render="column.render"
            />
            <template v-else>{{scope.row[column.prop]}}</template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div
      v-if="paging"
      class="no-table-footer clearfix"
    >
      <div v-if="isSelection" class="float-left">
        <span class="no-table-footer__selected">已选: {{ selectedTotal }} 条</span>
        <devider type="vertical" />
        <slot></slot>
      </div>
      <el-pagination
        class="no-table-paging"
        background
        v-bind="$attrs"
        @current-change="handlePagCurrentChange"
        layout="total, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import NoTableRender from './NoTableRender'
import Devider from '../Divider'
import SvgIcon from '@/shared/components/SvgIcon'

// 每一列设置的默认属性都将 merge 该项
const columnDefaultConfigs = {
  align: 'center',
  showOverflowTooltip: true
}

export default {
  name: 'myTable',
  components: {
    NoTableRender,
    Devider,
    /* eslint-disable vue/no-unused-components */
    SvgIcon
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    paging: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selection: []
    }
  },
  computed: {
    mergeColumns () {
      return this.columns.map(item => ({ ...columnDefaultConfigs, ...item }))
    },
    // 是否是多选
    isSelection () {
      return this.mergeColumns.some(item => item.type && item.type === 'selection')
    },
    // 已选的条数
    selectedTotal () {
      return this.selection.length
    }
  },
  methods: {
    // 多选事件
    handleSelectionChange (selection) {
      this.selection = selection
      this.$emit('multi-select-change', this.selection)
    },
    // 分页改变
    handlePagCurrentChange (val) {
      this.$emit('paging-current-change', val) // 表单分页时间派发
    }
  }
}
</script>

<style lang="scss">
.no-table {
  margin-top: 20px;

  &-footer {
    margin-top: 20px;

    .float-left {
      line-height: 28px;

      .el-button, button {
        padding: 0 15px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
      }
    }
    &__selected {
      display: inline-block;
      min-width: 68px;
      color: #65676d;
      font-size: 13px;
    }
  }
  &-paging {
    float: right;
  }

  // 重置表格样式
  .el-table__header-wrapper thead th {
    background-color: #edeef0!important;
    height: 44px!important;
    line-height: 44px!important;
    color: #65676d!important;
  }
  .el-table td, .el-table th {
    padding: 0!important;
    height: 38px!important;
    line-height: 38px!important;
    font-size: 13px!important;
  }
}
</style>
