import * as Vue from 'vue'

import * as router from './router'
import App from './app.vue'

import './index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
