<template>
  <transition name="fade" mode="out-in">
    <keep-alive :include="cachedViews">
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>
<script>
export default {
  name: 'main-content',
  computed: {
    cachedViews () {
      return this.$store.state.cachedViews
    }
  }
}
</script>
