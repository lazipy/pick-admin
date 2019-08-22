<template>
  <div class="message-list">
    <el-form>
      <search-radio v-model="type" :source="source" />
    </el-form>
  </div>
</template>

<script>
import SearchRadio from '@/shared/components/SearchRadio'

export default {
  name: 'message',
  components: { SearchRadio },
  data () {
    return {
      source: [
        { value: 0, label: '全部' },
        { value: 1, label: '已读' },
        { value: 2, label: '未读' }
      ],
      type: 0
    }
  }
}
</script>

<style>

</style>
