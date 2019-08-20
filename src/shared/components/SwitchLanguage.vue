<template>
  <el-dropdown
    class="switch-language"
    @command="onCommand"
  >
    <i class="iconfont icon-translate" :style="{ color: color }"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in languages"
        :key="item.key"
        :command="item.key">
        <svg-icon :iconClass="item.icon"></svg-icon>{{item.text}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import SvgIcon from './SvgIcon'
import { gtZero } from '@/shared/utils'

export default {
  name: 'SwitchLanguage',
  components: { SvgIcon },
  props: {
    color: {
      type: String
    },
    languages: {
      type: Array,
      default: () => [],
      validator: gtZero
    }
  },
  methods: {
    onCommand (command) {
      if (this.$i18n.getLocale() !== command) {
        this.$i18n.setLocale(command)
        this.$emit('change', command)
      }
    }
  }
}
</script>

<style lang="scss">
  .switch-language {
    line-height: initial;
    cursor: pointer;

    .icon-translate {
      display: inline-block;
      padding: 0 15px;
    }
  }
</style>
