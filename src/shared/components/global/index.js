import Divider from './Divider'

const components = [
  Divider
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Divider
}
