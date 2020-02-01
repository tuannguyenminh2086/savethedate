import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-132044559-2'
})
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
