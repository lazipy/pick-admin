<template>
  <div
    class="avatar"
    :style="currentStyle"
    :class="classes"
  >
    <img
      class="avatar-image"
      :src="src"
      :alt="nativeAlt"
    >
  </div>
</template>

<script>
import { OneOf } from '@/shared/utils'

export default {
  name: 'avatar',
  props: {
    type: {
      type: String,
      default: 'circle',
      validator: OneOf(['circle', 'round', 'square'])
    },
    size: {
      type: Number,
      default: 48
    },
    src: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    nativeAlt: {
      type: String,
      default: '头像'
    },
    color: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    classes () {
      return [`avatar-${this.type}`, this.border ? 'border' : '']
    },
    currentStyle () {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss">
.avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &-image {
    width: 100%;
    height: 100%;
  }

  // Type
  &-circle {
    border-radius: 50%;
  }

  &-round {
    border-radius: 4px;
  }

  &-square {
    border-radius: none;
  }
}
</style>
