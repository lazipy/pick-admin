<template>
  <div class="message-list">
    <!-- search form -->
    <search-radio v-model="params.type" @change="defaultQuery" :source="source" />
    <!-- table -->
    <no-table
      :loading="loading"
      stripe
      :row-class-name="rowClassName"
      :data="message.list"
      :total="message.total"
      :columns="columns"
      @paging-current-change="handlePageChange">
      <el-button type="info" icon="el-icon-view">已读</el-button>
      <el-button type="danger" icon="el-icon-delete">删除</el-button>
    </no-table>
  </div>
</template>

<script>
import NoTable from '@/shared/components/NoTable'
import SearchRadio from '@/shared/components/SearchRadio'
import { mapGetters } from 'vuex'

export default {
  name: 'message',
  components: { NoTable, SearchRadio },
  data () {
    return {
      // search type options
      source: [
        { value: 0, label: this.$t('personal.message.all') },
        { value: 1, label: this.$t('personal.message.read') },
        { value: 2, label: this.$t('personal.message.unread') }
      ],

      // table list data
      columns: [
        { type: 'selection', width: '40px' },
        { prop: 'title', label: '主题', align: 'left' },
        { prop: 'type', label: '类型' },
        { prop: 'created_at', label: '发送时间' },
        {
          label: '操作',
          width: '100',
          render: (h, { row }) => {
            return (
              <span class="operator-svg">
                <el-tooltip content="详情">
                  <svg-icon icon-class="view"></svg-icon>
                </el-tooltip>
                <el-tooltip content="删除">
                  <svg-icon icon-class="delete"></svg-icon>
                </el-tooltip>
              </span>
            )
          }
        }
      ],

      // table list loading
      loading: false,

      // query payload
      params: {
        type: 0,
        page: 0,
        pageSize: 10
      }
    }
  },
  computed: {
    ...mapGetters({
      message: 'personal/message'
    })
  },
  created () {
    this.defaultQuery()
  },
  methods: {
    // 初始查询
    defaultQuery () {
      this.loading = true
      this.$store.dispatch('personal/queryMessage', this.params).then(res => {
        if (res.code === '0') {
          this.loading = false
        }
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },

    // 分页
    handlePageChange (val) {
      this.params.page = val - 1
      this.defaultQuery()
    },

    // 表格一行的 class 的回调
    rowClassName ({ row }) {
      return row.read ? 'read' : 'unread'
    }
  }
}
</script>

<style lang="scss">
  .message-list {
    .read td {
      color: #aaaaaa !important;
    }
  }
</style>
