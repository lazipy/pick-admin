<template>
  <div
    class="drawer"
    :class="wrapClass"
    v-transfer="transfer"
  >
    <transition :name="`fade-${placement}`">
      <draggable-resizable
        class="drawer-content"
        :active="true"
        :class="classes"
        v-if="currentVisble"
        :handles="['ml', 'mr']"
        :w="currentWidth"
        @resizing="resize"
        :resizable="resizable"
        :draggable="false"
      >
        <span class="close" @click="close">
          <i class="iconfont icon-close"></i>
        </span>
        <scroller ref="scroll" :scroll-x="false">
          <h5
            class="drawer-title"
            v-if="this.$slots.title"
          >
            <slot name="title"></slot>
          </h5>
          <div
            class="drawer-body"
            v-if="this.$slots.default"
          >
            <slot></slot>
          </div>
        </scroller>
      </draggable-resizable>
    </transition>
    <masker
      v-if="mask"
      :color="maskColor"
      :transfer="false"
      :visible.sync="currentVisble"
      :closeable="maskClickClose"
    >
    </masker>
  </div>
</template>

<script>
import { OneOf } from '../utils'
import DraggableResizable from 'vue-draggable-resizable'
import Masker from './Masker'
import Scroller from './Scroller'
import Transfer from '../directives/transfer'

export default {
  name: 'SDrawer',
  components: { DraggableResizable, Masker, Scroller },
  directives: { Transfer },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: 'right',
      validator: OneOf(['left', 'right'])
    },
    customClass: {
      type: String
    },
    resizable: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskColor: {
      type: String
    },
    maskClickClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentWidth: this.width
    }
  },
  computed: {
    currentVisble: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
        this.$emit('change', val)
      }
    },
    wrapClass () {
      return [this.currentVisble ? 'drawer-show' : '', this.customClass]
    },
    classes () {
      return [`drawer-${this.placement}`]
    },
    currentStyle () {
      return {
        width: this.currentWidth + 'px'
      }
    }
  },
  methods: {
    resize (left, top, w, h) {
      this.currentWidth = w
      this.$refs.scroll.refresh()
    },
    close () {
      this.currentVisble = false
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
  .drawer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    z-index: 4050;
    transition: width 0s;
    transition-delay: .3s;

    &-show {
      width: 100%;
      transition-delay: 0s;
    }

    .close {
      position: absolute;
      top: 0;
      left: -48px;
      z-index: 4060;
      width: 48px;
      height: 48px;
      background-color: $--color-primary;
      text-align: center;
      line-height: 48px;
      color: #ffffff;
      cursor: pointer;

      .iconfont {
        font-size: 20px;
      }
    }
  }

  // content
  .drawer-content {
    position: absolute;
    top: 0 !important;
    bottom: 0 !important;
    height: 100% !important;
    overflow: visible;
    background-color: #fff;
    box-shadow: -2px 0 12px 0 rgba(0,0,0,.1);
    z-index: 4050 !important;

    .handle {
      position: absolute;
      top: 0;
      margin: 0;
      width: 10px;
      height: 100%;
      border: none;
      background-color: transparent;
      cursor: ew-resize;
      z-index: 1;
      opacity: 0;
      transition: opacity .3s;

      &::before {
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: rgba($--color-primary, .8);
        content: ' ';
      }

      &::after {
        position: absolute;
        top: 50%;
        width: 2px;
        height: 18px;
        color: $--color-primary;
        background-color: rgba($--color-primary, .8);
        content: ' ';
        transform: translateY(-50%);
      }

      &:hover {
        opacity: 1;
      }
    }
    .handle-ml {
      left: -10px;

      &::before {
        left: 8px;
      }
      &::after {
        left: 0;
      }
    }
    .handle-mr {
      right: -10px;

      &::before {
        right: 8px;
      }
      &::after {
        right: 0;
      }
    }
  }
  .drawer-right {
    right: 0 !important;
    left: auto !important;
  }
  .drawer-left {
    left: 0 !important;
    right: none !important;
  }

  // title
  .drawer-title {
    width: 100%;
    overflow-x: hidden;
    white-space: normal;
    padding: 16px 24px;
    font-size: 16px;
    margin: 0;
    border-bottom: 1px solid $--border-color-base;
  }

  // body
  .drawer-body {
    width: 100%;
    padding: 16px 24px;
    overflow-x: hidden;
    white-space: normal;
  }
</style>
