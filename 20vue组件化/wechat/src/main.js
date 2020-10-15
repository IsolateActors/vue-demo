import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 渲染
  render: h => h(App),
}).$mount('#app')
