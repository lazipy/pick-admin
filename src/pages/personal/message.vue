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
        { value: 0, label: this.$t('personal.message.all') },
        { value: 1, label: this.$t('personal.message.read') },
        { value: 2, label: this.$t('personal.message.unread') }
      ],
      type: 0
    }
  }
}
</script>

<style>

</style>
