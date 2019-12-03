import Vue from 'vue'
import VueRouter from 'vue-router'

import { Dashboard, Calendar } from './pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: 'vuetify',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
  ],
})

export default router
