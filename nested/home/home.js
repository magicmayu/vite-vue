import Vue from 'vue'

// import router from './router'
import Home from './Home.vue'

import '../../src/index.scss'

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(Home),
}).$mount('#app')
