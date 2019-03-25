import Intersect from './IntersectionObserver'
import Mutation from './MutationObserver'
import Resize from './ResizeObserver'

function plugin(Vue) {
  Vue.component('intersect', Intersect)
  Vue.component('mutate', Mutation)
  Vue.component('resize', Resize)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Intersect,
  Mutation,
  Resize,
  version
}
