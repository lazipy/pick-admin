<template>
  <div
    class="divider"
    :class="classes"
    :style="{height: height}"
  >
    <span
      class="divider-text"
      v-if="type !== 'vertical' && $slots.default && $slots.default.length > 0"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { OneOf } from '../../utils'

export default {
  name: 'Divider',
  props: {
    height: {
      type: String,
      default: '0.9em'
    },
    type: {
      type: String,
      default: 'horizontal',
      validator: OneOf(['horizontal', 'vertical'])
    },
    position: {
      type: String,
      default: 'center',
      validator: OneOf(['left', 'center', 'right'])
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `divider-${this.type}`,
        this.dashed ? 'divider-dashed' : '',
        `divider-${this.position}`
      ]
    }
  }
}
</script>

<style lang="scss">
  .divider {
    display: inline-flex;
    align-items: center;

    // inner Title
    &-text {
      display: inline-block;
      text-align: center;
      white-space: nowrap;
      padding: 0 20px;
      color: #212529;
      font-size: 16px;
      font-weight: 500;
    }
  }

  // horizontal
  .divider-horizontal {
    width: 100%;
    margin: 20px 0;

    &::before {
      width: 50%;
      content: ' ';
      border-top: 1px solid #dee2e6;
    }

    &::after {
      width: 50%;
      content: ' ';
      border-top: 1px solid #dee2e6;
    }
  }

  // vertical
  .divider-vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    width: 1px;
    margin: 0 8px;
    vertical-align: middle;
    background-color: #dee2e6;
  }

  // dashed
  .divider-dashed {
    &::before,
    &::after {
      border-top-style: dashed;
    }
  }

  // position left
  .divider-left {
    &::before {
      width: 5%;
    }
    &::after {
      flex: 1;
    }
    .divider-text {
      padding: 0 8px;
    }
  }

  // position right
  .divider-right {
    &::before {
      flex: 1;
    }
    &::after {
      width: 5%;
    }
    .divider-text {
      padding: 0 8px;
    }
  }
</style>
