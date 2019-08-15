import Vue from 'vue'
// normalize.css - A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// element-ui
import ElementUI from 'element-ui'
import './element-ui/theme/index.css'
// particles.js
import 'particles.js/particles'
// styles
import '../styles/index.scss'
// import global components
import GlobalComponents from '../components/global'

Vue.use(ElementUI)
Vue.use(GlobalComponents)
