import Vue from 'vue'
import Router from 'vue-router'
import Signing from './signing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      name: 'login',
      path: '/login',
      meta: {
        router: 'login',
      },
      component: () => import('@/views/login/index.vue'),
    },
    ...Signing,
  ]
})
