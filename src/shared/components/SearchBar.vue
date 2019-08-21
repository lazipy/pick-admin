<template>
  <div class="search-bar" :class="{ visibled: visible }" v-click-outside="outsideClick">
    <i class="iconfont icon-search" :style="{color: color}" @click="clickHanlder"></i>
    <el-input v-model="model" :placeholder="$t(`layout.${placeholder}`)"></el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'search'
    },
    color: {
      type: String
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    clickHanlder () {
      this.visible = !this.visible
    },
    outsideClick () {
      if (this.visible) {
        this.visible = false
      }
    }
  }
}
</script>

<style lang="scss">
  .search-bar {
    display: flex;
    align-items: center;
    color: #606266;
    padding: 0 15px;
    &:hover {
      background-color: #fff !important;
    }

    .el-input__inner {
      border-left: none;
      border-top: none;
      border-right: none;
      border-radius: 0;
      margin: 0;
      width: 0;
      padding: 0;
      transition: all .2s;
    }

    &.visibled .el-input__inner {
      padding-left: 2px;
      margin-left: 8px;
      width: 150px;
    }
  }
</style>
