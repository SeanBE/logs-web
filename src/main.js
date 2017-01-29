import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'

import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import router from './router/'
import store from './vuex/store'
import App from './views/App.vue'

sync(store, router)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
