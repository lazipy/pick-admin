import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  beforeEach: (to, from, next) => {
    NProgress.start()
    next()
  },
  afterEach: (to, from) => {
    NProgress.done()
  }
}
