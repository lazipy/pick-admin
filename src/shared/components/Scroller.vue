<template>
  <div
    class="scroller"
    ref="scroller"
  >
    <div
      class="scroller-content"
      ref="content"
      :style="{ width: contentWidth }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroller',
  props: {
    scrollbar: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: true
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      scroller: null,
      contentWidth: ''
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.destroy()
    this.scroller = null
  },
  methods: {
    init () {
      if (!this.$refs.scroller) return

      if (
        this.scrollX &&
        this.$refs.content.scrollWidth > this.$refs.content.offsetWidth
      ) {
        this.contentWidth = this.$refs.content.scrollWidth + 'px'
      }

      let options = {
        bounce: false,
        probeType: 3,
        preventDefault: false,
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        scrollbar: this.scrollbar || { fade: false, interactive: true },
        mouseWheel: {
          speed: 20,
          easeTime: 100
        }
      }

      this.$nextTick(() => {
        this.scroller = new BScroll(this.$refs.scroller, options)
        this.scroller.on('scroll', this.scroll)
        this.scroller.on('scrollEnd', this.scrollEnd)
      })
    },
    scroll (index) {
      this.$emit('scroll', index)
      if (index.y - this.offset <= this.scroller.maxScrollY) {
        this.$emit('will-end', index.y)
      }
    },
    scrollEnd (index) {
      this.$emit('scroll-end', index)
    },
    disable () {
      this.scroller && this.scroller.disable()
    },
    enable () {
      this.scroller && this.scroller.enable()
    },
    refresh () {
      this.scroller && this.scroller.refresh()
    },
    scrollTo () {
      this.scroller && this.scroller.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroller &&
        this.scroller.scrollToElement.apply(this.scroller, arguments)
    },
    destroy () {
      this.scroller.destroy()
    }
  }
}
</script>

<style lang="scss">
  .scroller {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;

    &-content {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
    }
  }
  .bscroll-horizontal-scrollbar, .bscroll-vertical-scrollbar {
    z-index: 99 !important;
  }
  .bscroll-indicator {
    background-color: rgba(0, 0, 0, 0.3) !important;
    border: none !important;
    cursor: pointer;
    margin-left: 1px;
  }
</style>
