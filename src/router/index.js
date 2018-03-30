import Vue from 'vue'
import Router from 'vue-router'
import base from '@/components'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:base
    }
  ]
})
