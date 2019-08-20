<template>
  <el-breadcrumb class="breadcrumb-navigator" separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(item, index)  in breadcrumbs">
        <el-breadcrumb-item :key="item.path + index" v-if="item.meta.title">
          <span v-if="index === breadcrumbs.length - 1">{{ item.meta.title }}</span>
          <router-link v-else :to="item.redirect || item.path">{{ item.meta.title }}</router-link>
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { gtZero } from '@/shared/utils'

export default {
  name: 'BreadcrumbNavigator',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
      validator: gtZero
    }
  }
}
</script>
