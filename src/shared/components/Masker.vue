<template>
  <transition name="fade">
    <div
      v-if="visible"
      v-transfer="transfer"
      class="masker"
      @click.self="handleClick"
      :style="currentStyle"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Transfer from '../directives/transfer'

export default {
  name: 'Masker',
  directives: { Transfer },
  props: {
    color: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: true
    },
    transfer: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentStyle () {
      return {
        backgroundColor: this.color
      }
    }
  },
  methods: {
    handleClick () {
      if (this.closeable) {
        this.$emit('update:visible', false)
      }
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  .masker {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    z-index: $--index-popper;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
