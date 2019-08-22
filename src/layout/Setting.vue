<template>
  <div class="layout-setting" @click="toggleVisible">
    <i class="iconfont icon-setting"></i>

    <drawer transfer resizable closeable :visible.sync="visible" placement="right">
      <p class="title">主题色</p>
      <div class="themes">
        <div
          class="theme-item"
          :class="{ active: theme === item }"
          :style="{ backgroundColor: '#' + item }"
          v-for="item in themes"
          :key="item"
          @click="clickHandler(item)"
        >
          <i class="el-icon-check"></i>
        </div>
      </div>
    </drawer>
  </div>
</template>

<script>
import Drawer from '@/shared/components/Drawer'
import { changeTheme } from '@/shared/utils/global'
import { mapGetters } from 'vuex'

export default {
  name: 'Setting',
  components: { Drawer },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters({
      theme: 'application/theme',
      themes: 'application/themes'
    })
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible
    },
    clickHandler (theme) {
      changeTheme(theme)
    }
  }
}
</script>

<style lang="scss">
  .theme-4C70E8 .layout-setting {
    background-color: $primary-1;
  }
  .theme-1DC9B7 .layout-setting {
    background-color: $primary-2;
  }
  .theme-FFB822 .layout-setting {
    background-color: $primary-3;
  }

  .themes {
    display: flex;
    align-items: center;
  }
  .theme-item {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    cursor: pointer;
    border-radius: 2px;
    text-align: center;
    line-height: 24px;

    .el-icon-check {
      display: none;
      color: #ffffff;
    }

    &.active .el-icon-check {
      display: inline-block;
    }
  }

  .layout-setting {
    position: fixed;
    top: 200px;
    right: 0;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 4px 0 0 4px;
    color: #ffffff;
    cursor: pointer;

    .iconfont {
      display: inline-block;
      font-size: 20px;
      animation: spinner 8s linear infinite;
    }
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
