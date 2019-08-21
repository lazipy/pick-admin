<template>
  <el-aside :width="width" class="aside-bar" :class="collapsed && 'collapsed'">
    <!-- logo -->
    <div class="logo-wrap" @click="backhome">
      <img class="logo" src="../assets/images/logo.svg" alt="logo">
      <img class="desc" src="../assets/images/layout_logo.png" alt="logo">
    </div>

    <!-- menu -->
    <el-menu :collapse="collapsed" background-color="#1F233E" text-color="#adb5bd" active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i><span class="submenu-title">导航一</span></template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- trigger -->
    <div class="trigger" @click="toggle">
      <i class="iconfont icon-left"></i>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    width () {
      return this.collapsed ? '64px' : '240px'
    }
  },
  methods: {
    backhome () {
      if (this.$route.path === '/welcome') return
      this.$router.push('/welcome')
    },
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss">
  .aside-bar {
    display: flex;
    flex-direction: column;
    background-color: #1F233E;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    transition: width .2s;

    &.collapsed {
      .logo {
        margin-left: 10px;
      }
      .desc {
        display: none;
      }
      .title, .submenu-title {
        display: none;
      }
      .icon-left {
        transform: rotate(180deg);
      }
    }
    // logo
    .logo-wrap {
      display: flex;
      align-items: center;
      height: 60px;
      cursor: pointer;
      color: #ffffff;
      overflow: hidden;
    }
    .logo {
      height: 36px;
      margin-left: 20px;
      transition: all .2s;
    }
    .desc {
      height: 30px;
      margin-left: 10px;
    }
    // menu
    .el-menu {
      flex: 1;
      overflow: auto;
      border-right: none;

      .el-menu-item.is-active {
        background-color: $--color-primary !important;;
      }
      .el-submenu__title {
        overflow: hidden;
      }
      .el-submenu.is-active > .el-submenu__title {
        color: #ffffff !important;
        i {
          color: #ffffff !important;
        }
      }
      .el-menu-item:hover, .el-submenu__title:hover {
        color: #ffffff !important;
        i {
          color: #ffffff !important;
        }
      }
      .el-submenu [class^="el-icon-"] {
        position: relative;
        top: -2px;
      }
    }
    // trigger
    .trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 54px;
      background-color: rgb(25, 28, 50);
      cursor: pointer;
      .icon-left {
        color: #ffffff;
        padding: 10px;
        transition: transform .2s;
      }
    }
  }
</style>
