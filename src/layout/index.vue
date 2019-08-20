<template>
  <el-container class="layout">
    <!-- aside 侧边栏 -->
    <side-bar />
    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <!-- 头部 -->
      <top-bar />
      <!-- 内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar'
import TopBar from './TopBar'

export default {
  name: 'layout',
  components: { SideBar, TopBar }
}
</script>

<style lang="scss">
  #main {
    height: 100vh;
  }
</style>

<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
</style>
