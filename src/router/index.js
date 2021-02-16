import vueRouter from 'vue-router'

import routes from './routes'

const router = new vueRouter({
  mode: 'history',
  routes,
})

export default router
