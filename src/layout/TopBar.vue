<template>
  <el-header class="top-bar clearfix">
    <div class="float-left">
      <breadcrumb-navigator :breadcrumbs="breadcrumbs"/>
    </div>
    <div class="float-right">
      <!-- github -->
      <github href="https://github.com/lazipy/pick-admin" />
      <!-- user message -->
      <user-message is-dot @click="navigatorTo('/personal/message')" />
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
import BreadcrumbNavigator from '@/shared/components/BreadcrumbNavigator'
import UserMessage from '@/shared/components/UserMessage'
import SwitchLanguage from '@/shared/components/SwitchLanguage'
import UserAvatar from '@/shared/components/UserAvatar'
import Github from '@/shared/components/Github'
import { mapGetters } from 'vuex'

export default {
  name: 'TopBar',
  components: { BreadcrumbNavigator, UserMessage, SwitchLanguage, UserAvatar, Github },
  data () {
    return {
      breadcrumbs: [],
      // 用户头像下拉
      actions: [
        { key: '/personal/profile', icon: 'profile', text: this.$t('layout.profile') },
        { key: '/personal/modify-password', icon: 'modify-password', text: this.$t('layout.modifyPassword') },
        { key: '/login', icon: 'logout', divided: true, text: this.$t('layout.logout') }
      ]
    }
  },
  computed: {
    ...mapGetters({
      languages: 'application/languages', // 语言种类
      userInfo: 'user/userInfo' // 用户信息
    })
  },
  watch: {
    $route: {
      handler () {
        this.breadcrumbs = this.$router.breadcrumbs
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    avatarHandler (path) {
      if (path === '/login') {
        window.sessionStorage.removeItem('userName')
      }
      this.navigatorTo(path)
    },
    // router push
    navigatorTo (path) {
      this.$router.push(path)
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

    .float-left, .float-right {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .float-right > div {
      height: 60px;
      line-height: 60px;
      cursor: pointer;

      &:hover {
        background-color: $--color-primary-light-9;
      }
    }
  }
</style>
