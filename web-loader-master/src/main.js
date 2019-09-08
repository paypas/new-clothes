import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueRouter from 'vue-router'
import routes from './router/routes'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

Vue.use(VueRouter)
const router = new VueRouter({routes});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
