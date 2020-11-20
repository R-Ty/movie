import Vue from 'vue'
import App from './App.vue'
import router from './rout'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
