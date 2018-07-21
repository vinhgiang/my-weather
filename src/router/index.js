import Vue from 'vue'
import Router from 'vue-router'

import Weather from '@/components/Weather'
import About from '@/pages/About'
import City from '@/pages/City'
import appNavigation from '@/components/Navigation'

Vue.use(Router)
Vue.component('appNavigation', appNavigation)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/city/:cityName',
      name: 'City',
      component: City
    }
  ],
  mode: 'history'
})
