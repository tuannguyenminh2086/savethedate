import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-132044559-2'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
