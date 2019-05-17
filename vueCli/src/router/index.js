import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/login'
import reg from '@/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: import('@/login')  // 按需加载
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})
