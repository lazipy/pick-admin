<template>
  <el-tooltip effect="dark" :content="$t(`layout.${message}`)" placement="bottom">
    <div class="github" @click="clickHandler">
      <i class="iconfont icon-github"></i>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: 'Github',
  props: {
    href: {
      type: String,
      required: true
    },
    message: {
      type: String,
      default: 'github'
    }
  },
  methods: {
    clickHandler () {
      window.open(this.href, '_blank')
    }
  }
}
</script>

<style lang="scss">
  .github {
    padding: 0 15px;
  }
</style>
