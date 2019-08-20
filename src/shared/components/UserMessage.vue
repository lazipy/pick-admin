<template>
  <div class="user-message">
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
