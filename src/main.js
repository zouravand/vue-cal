import Vue from 'vue'
import router from './router'
import WaveUI from './plugins/wave-ui'
import App from './app.vue'

import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'

new Vue({
  router,
  WaveUI,
  render: h => h(App)
}).$mount('#app')
