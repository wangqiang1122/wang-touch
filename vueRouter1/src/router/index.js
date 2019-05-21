import Vue from 'vue';
// import Router from 'vue-router';
import myRouter from '../my-router/my-router';
import HelloWorld from '@/components/HelloWorld';

// Vue.use(Router);
Vue.use(myRouter);
// var a = new myRouter({ a: '1', b: 1});

export default new myRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
