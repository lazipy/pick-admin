<template>
  <el-dropdown
    class="user-avatar"
    trigger="click"
    @command="onCommand"
  >
    <span class="user-avatar__wraper">
      <Avatar :size="size" :src="src" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in actions"
        :key="item.key"
        :command="item.key"
        :divided="item.divided">
        <svg-icon :iconClass="item.icon"></svg-icon>{{item.text}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Avatar from './Avatar'
import SvgIcon from './SvgIcon'
import { gtZero } from '@/shared/utils'

export default {
  name: 'UserAvatar',
  components: { Avatar, SvgIcon },
  props: {
    size: {
      type: Number,
      default: 48
    },
    src: {
      type: String,
      required: true
    },
    actions: {
      type: Array,
      default: () => [],
      validator: gtZero
    }
  },
  methods: {
    onCommand (command) {
      this.$emit('click', command)
    }
  }
}
</script>

<style lang="scss">
  .user-avatar__wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0 12px;
  }
</style>
