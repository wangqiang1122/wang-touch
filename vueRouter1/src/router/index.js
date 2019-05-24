import Vue from 'vue';
// import Router from 'vue-router';
import myRouter from '../my-router/my-router';
import HelloWorld from '@/components/HelloWorld';
import about from '@/components/about';

// Vue.use(Router);
Vue.use(myRouter);
// var a = new myRouter({ a: '1', b: 1});

export default new myRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter(to,from,next) {
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
  ],
});
