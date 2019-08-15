<template>
  <div id="login">
    <!-- header -->
    <header>
      <h1 class="title">
        <img class="logo" src="../assets/images/logo.png" alt="logo">
        <Divider type="vertical" height="48%" />
        <span>后台管理系统模板</span>
      </h1>
    </header>
    <!-- login form -->
    <el-card class="login-form">
      <span slot="header">欢迎登录</span>
      <el-form ref="form" :model="formData" :rules="rules">
        <!-- user name -->
        <el-form-item prop="name">
          <el-input v-model="formData.name" placeholder="用户名" />
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input v-model="formData.password" placeholder="密码" />
        </el-form-item>
        <!-- btn login -->
        <el-form-item>
          <el-button class="btn-login" type="primary" :loading="loading" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import particlesOptions from '@/shared/config/particles'

export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  mounted () {
    /* eslint-disable */
    particlesJS('login', particlesOptions)
  },
  methods: {
    // submit login
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.formData).then(res => {
            this.loading = false
            if (res.code === '0') {
              this.$router.push('/')
            }
          }).catch(err => {
            this.loading = false
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
  #login {
    height: 100vh;
    canvas.particles-js-canvas-el {
      background-color: $--color-primary;
    }

    // header style
    header {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 68px;
      line-height: 68px;
    }
    .title {
      display: flex;
      align-items: center;
      padding-left: 20px;
      margin: 0;
      height: 100%;
      font-size: 22px;
      font-weight: normal;
      color: #ffffff;

      .logo {
        height: 48px;
      }
    }

    // login form style
    .login-form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 360px;

      .btn-login {
        width: 100%;
      }
    }
  }
</style>
