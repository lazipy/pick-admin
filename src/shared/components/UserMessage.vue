<template>
  <el-tooltip effect="dark" :content="$t(`layout.${message}`)" placement="bottom">
    <div class="user-message" @click="clickHandler">
      <el-badge v-bind="$attrs">
        <i class="iconfont icon-message" :style="{color: color}"></i>
      </el-badge>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'UserMessage',
  props: {
    color: {
      type: String
    },
    message: {
      type: String,
      default: 'message'
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
    color: #606266;

    .el-badge {
      line-height: initial;
    }
  }
</style>
