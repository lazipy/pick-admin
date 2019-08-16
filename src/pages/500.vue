<template>
  <div class="error">
    <img className="image" src="../assets/images/500.png" alt="500" >
    <div className="descript">
      <p className="intro">抱歉，您访问的页面出错了...</p>
      <el-button type="primary" @click="() => $router.replace('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>
  .error {
    width: 900px;
    margin: 80px auto 0;
    text-align: center;

    .descript {
      margin-top: 20px;
    }
    .intro {
      padding: 40px 0 20px 0;
      margin: 0;
      font-size: 20px;
    }
  }
</style>
