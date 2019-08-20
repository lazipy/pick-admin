<template>
  <div class="user-message" @click="clickHandler">
    <el-badge v-bind="$attrs">
      <i class="el-icon-bell" :style="{color: color}"></i>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: 'UserMessage',
  props: {
    color: {
      type: String
    }
  },
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  .user-message {
    padding: 0 15px;

    .el-badge {
      line-height: initial;
    }
  }
</style>
