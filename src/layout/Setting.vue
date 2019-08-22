<template>
  <div class="layout-setting" @click="toggleVisible">
    <i class="iconfont icon-setting"></i>

    <drawer transfer resizable closeable :visible.sync="visible" placement="right">
      <span slot="title">Drawer Title</span>
      <div  style="padding-bottom: 60px;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut modi quam sit sint distinctio esse tenetur numquam consequuntur unde itaque harum doloribus tempore vero rerum deserunt fugiat, dignissimos quia nulla.</p>
      </div>
      <span class="drawer-footer">
        <el-button type="primary">Update</el-button>
        <el-button>Cancel</el-button>
      </span>
    </drawer>
  </div>
</template>

<script>
import Drawer from '@/shared/components/Drawer'

export default {
  name: 'Setting',
  components: { Drawer },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
  .layout-setting {
    position: fixed;
    top: 200px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: $--color-primary;
    text-align: center;
    line-height: 48px;
    border-radius: 4px 0 0 4px;
    color: #ffffff;
    cursor: pointer;

    .iconfont {
      display: inline-block;
      font-size: 20px;
      animation: spinner 8s linear infinite;
    }
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
