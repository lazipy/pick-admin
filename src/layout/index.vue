<template>
  <el-container class="layout">
    <!-- 设置 -->
    <setting />
    <!-- aside 侧边栏 -->
    <side-bar />
    <!-- 右侧内容 -->
    <el-container direction="vertical">
      <!-- 头部 -->
      <top-bar />
      <!-- tag views -->
      <tag-view></tag-view>
      <!-- 内容主体 -->
      <el-main>
        <div class="body">
          <main-content />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Setting from './parts/Setting'
import SideBar from './parts/SideBar'
import TopBar from './parts/TopBar'
import MainContent from './parts/Content'
import TagView from '@/shared/components/TagView'

export default {
  name: 'layout',
  components: { Setting, SideBar, TopBar, TagView, MainContent }
}
</script>

<style lang="scss">
  #main {
    height: 100vh;
  }
</style>

<style lang="scss">
  .layout {
    height: 100%;
    .el-main {
      background-color: #f1f2f6;
      .body {
        padding: 16px 30px 24px 20px;
        min-height: 100%;
        background-color: #fff;
      }
    }
  }
</style>
