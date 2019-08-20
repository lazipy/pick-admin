import Vue from 'vue'
import lazybee from '../lazybee'
// normalize.css - A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// element-ui
import ElementUI from 'element-ui'
import './element-ui/theme/index.css'
// particles.js
import 'particles.js/particles'
// styles
import '../styles/index.scss'

Vue.use(lazybee)
Vue.use(ElementUI)

export default lazybee.init()
