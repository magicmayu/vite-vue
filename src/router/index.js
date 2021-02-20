import Vue from 'vue'
import vueRouter from 'vue-router'

import routes from './routes'

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  routes,
})

export default router
