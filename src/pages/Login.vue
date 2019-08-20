<template>
  <div id="login">
    <!-- header -->
    <header>
      <h1 class="title">
        <img class="logo" src="../assets/images/logo.png" alt="logo">
        <divider type="vertical" height="45%" />
        <span>{{ $t('login.title') }}</span>
      </h1>
      <switch-language color="#ffffff" :languages="languages" />
    </header>
    <!-- login form -->
    <el-card class="login-form">
      <span slot="header">{{ $t('login.desc') }}</span>
      <el-form ref="form" :model="formData" :rules="rules">
        <!-- user name -->
        <el-form-item prop="name">
          <el-input
            v-model="formData.name"
            @keyup.enter.native="onSubmit"
            :placeholder="$t('login.name')" />
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="formData.password"
            @keyup.enter.native="onSubmit"
            :placeholder="$t('login.password')" />
        </el-form-item>
        <!-- btn login -->
        <el-form-item>
          <el-button class="btn-login" type="primary" :loading="loading" @click="onSubmit">
            {{ $t('login.submit') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Divider from '@/shared/components/Divider'
import SwitchLanguage from '@/shared/components/SwitchLanguage'
import particlesOptions from '@/shared/config/particles'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  components: { Divider, SwitchLanguage },
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: this.$t('login.nameTips'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('login.passwordTips'), trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters({
      languages: 'application/languages' // 语言种类
    })
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
      padding: 0 40px 0 20px;
    }
    .title {
      display: flex;
      align-items: center;
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
      width: 380px;

      .btn-login {
        width: 100%;
      }
    }
  }
</style>
