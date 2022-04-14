import Vue from 'vue'
import App from './App.vue'
import index from './index1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
