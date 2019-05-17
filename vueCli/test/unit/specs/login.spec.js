import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/login'
// Vue.use(VueRouter)

describe('login', () => {
  it('报错了', () => {
    const Constructor = Vue.extend(login)
    const vm = new Constructor();
    console.log('aaaaaaaaaaaaaaaaaaaaaaa');
    console.log(vm.fn(1,2))
    vm.$mount();
    // console.log(vm.$el.querySelector('.div1'))
    expect(vm.$el.querySelector('.div1').textContent)
      .toEqual('12131')
  })
})
