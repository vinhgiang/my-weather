// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'vue-moment'
// import countryNames from 'countrynames'

import 'ress'
import '@/assets/scss/main.scss'

Vue.use(moment)
// Vue.use(countryNames)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
