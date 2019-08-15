<template>
  <el-dropdown
    class="switch-language"
    trigger="click"
    @command="onCommand"
  >
    <i class="iconfont icon-translate" :style="{ color: color }"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh-CN">
        <svg-icon iconClass="china"></svg-icon>简体中文
      </el-dropdown-item>
      <el-dropdown-item command="en-US">
        <svg-icon iconClass="english"></svg-icon>English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import SvgIcon from './SvgIcon'

export default {
  name: 'SwitchLanguage',
  components: { SvgIcon },
  props: {
    color: {
      type: String
    }
  },
  methods: {
    onCommand (command) {
      if (this.$i18n.getLocale() !== command) {
        this.$i18n.setLocale(command)
      }
    }
  }
}
</script>

<style lang="scss">
  .switch-language {
    line-height: initial;
    cursor: pointer;
  }
</style>
