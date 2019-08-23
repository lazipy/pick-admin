<template>
  <div class="layout-setting" @click="toggleVisible">
    <i class="iconfont icon-setting"></i>

    <drawer transfer resizable closeable :visible.sync="visible" placement="right">
      <p class="title">主题色</p>
      <div class="themes">
      </div>
    </drawer>
  </div>
</template>

<script>
import Drawer from '@/shared/components/Drawer'

export default {
  name: 'Setting',
  components: { Drawer },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
  .layout-setting {
    position: fixed;
    top: 120px;
    right: 0;
    z-index: 99;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 4px 0 0 4px;
    color: #ffffff;
    background-color: $--color-primary;
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
