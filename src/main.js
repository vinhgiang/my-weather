// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import myConfig from './config/config'

import 'ress'
import '@/assets/scss/main.scss'

Vue.use(VueMoment, {
  moment
})

myConfig.install = function () {
  Object.defineProperty(Vue.prototype, '$myConfig', {
    get () { return myConfig }
  })
}

Vue.use(myConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
