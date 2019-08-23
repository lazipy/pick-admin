<template>
  <el-aside :width="width" class="aside-bar" :class="collapsed && 'collapsed'">
    <!-- logo -->
    <div class="logo-wrap" @click="navigatorTo('/welcome')">
      <img class="logo" src="../assets/images/logo.svg" alt="logo">
      <img class="desc" src="../assets/images/layout_logo.png" alt="logo">
    </div>

    <!-- menu -->
    <el-menu :collapse="collapsed" :default-active="defaultActive" background-color="#1F233E" text-color="#adb5bd" active-text-color="#fff">
      <template v-for="item in permissionRoutes">
        <el-submenu v-if="!item.isNotMenu" :key="item.name" :index="item.path">
          <template slot="title">
            <i class="iconfont" :class="item.meta.icon"></i>
            <span class="submenu-title">{{ $t(`router.${item.meta.title}`) }}</span>
          </template>
          <template v-if="item.children && item.children.length > 0">
            <template v-for="menu in item.children">
              <el-menu-item :index="item.path + '/' + menu.path" v-if="!menu.isNotMenu" :key="menu.name" @click="navigatorTo(`${item.path}/${menu.path}`)">{{ $t(`router.${menu.meta.title}`) }}</el-menu-item>
            </template>
          </template>
        </el-submenu>
      </template>
    </el-menu>

    <!-- trigger -->
    <div class="trigger" @click="toggle">
      <i class="iconfont icon-left"></i>
    </div>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideBar',
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters({
      permissionRoutes: 'user/permissionRoutes'
    }),
    defaultActive () {
      return this.$route.path
    },
    width () {
      return this.collapsed ? '64px' : '240px'
    }
  },
  methods: {
    toggle () {
      this.collapsed = !this.collapsed
    },
    navigatorTo (url) {
      if (this.$route.path === url) return
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss">
  .aside-bar {
    display: flex;
    flex-direction: column;
    background-color: #1F233E;
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
      margin-bottom: 10px;
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

      .submenu-title {
        margin-left: 8px;
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
      .el-menu-item.is-active {
        background-color: $--color-primary !important;
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
