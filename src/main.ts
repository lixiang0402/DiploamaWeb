import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// Ui库
import uView from './uview-ui'
Vue.use(uView)

new App().$mount()
