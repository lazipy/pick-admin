<template>
  <el-header class="top-bar clearfix">
    <div class="float-left">

    </div>
    <div class="float-right">
      <!-- user message -->
      <user-message is-dot />
      <!-- switch language -->
      <switch-language :languages="languages" />
      <!-- user actions -->
      <user-avatar
        :size="40"
        :src="userInfo.avatar"
        :actions="actions"
        @click="avatarHandler"
      />
    </div>
  </el-header>
</template>

<script>
import UserMessage from '@/shared/components/UserMessage'
import UserAvatar from '@/shared/components/UserAvatar'
import SwitchLanguage from '@/shared/components/SwitchLanguage'
import { mapGetters } from 'vuex'

export default {
  name: 'TopBar',
  components: { UserMessage, UserAvatar, SwitchLanguage },
  data () {
    return {
      // 用户头像下拉
      actions: [
        { key: 'profile', icon: 'profile', text: '个人信息' },
        { key: 'modify-password', icon: 'modify-password', text: '修改密码' },
        { key: 'logout', icon: 'logout', divided: true, text: '退出' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      languages: 'application/languages', // 语言种类
      userInfo: 'user/userInfo' // 用户信息
    })
  },
  methods: {
    avatarHandler (val) {
      if (val === 'logout') {
        window.sessionStorage.removeItem('userName')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-bar {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);

    .float-right {
      display: flex;
      align-items: center;
      height: 100%;

      > div {
        height: 60px;
        line-height: 60px;
        cursor: pointer;

        &:hover {
          background-color: $--color-primary-light-9;
        }
      }
    }
  }
</style>
