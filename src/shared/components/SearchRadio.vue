<template>
  <el-radio-group
    class="search-radio"
    v-model="model"
  >
    <el-radio-button
      v-for="item in source"
      :key="item.value"
      :disabled="item.disabled"
      :label="item.value"
    >
    {{ item.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
import { gtZero } from '@/shared/utils'

export default {
  name: 'SearchRadio',
  props: {
    value: {
      type: [String, Number]
    },
    source: {
      type: Array,
      default: () => [],
      validator: gtZero
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
  .search-radio {
    display: inline-block;

    .el-radio-button .el-radio-button__inner {
      border: none;
      padding: 8px 30px;
      margin: 0 5px;
      border-radius: 4px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        width: 4px;
        height: 50%;
        background-color: $--color-info;
        border-radius: 4px;
      }
    }

    .el-radio-button:first-child .el-radio-button__inner, .el-radio-button:last-child .el-radio-button__inner {
      margin: 0;
    }

    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      color: $--color-primary;
      background-color: $--color-primary-light-8;
      box-shadow: -1px 0 0 0 $--color-primary-light-8;

      &::before {
        background-color: $--color-primary-light-1;
      }
    }
  }
</style>
