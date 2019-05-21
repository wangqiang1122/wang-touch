// import vue from 'vue';
// Vue.mixin({
//
// });

let Vue;

export default class myRouter {
  static install(_vue) {
    Vue = _vue;
    Vue.mixin({
      beforeCreate() {
        if (this.$options.Myrouter) {
          // new Vue的时候传递的
          Vue.prototype.$kkbrouter = '我是小老弟';
          Vue.prototype.$krouter = this.$options.Myrouter;
          console.log(Vue.prototype);
          // console.log(this.$options.router)
        }
        // console.log(options)
      },
    });
  }

  constructor(json) {
    this.$options = json;
    this.routeMap = {};
    this.init();
  }
  init() {
    console.log(this.$options);
    this.createRouteMap(this.$options);
    this.gethash();
    this.initComponent()
  }
  // 路由映射表
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item
    });
  }
  // 获取路由hash值
  gethash() {
    console.log(window.location.hash.substr(1))
  }
  // 刷新组件内容
  initComponent() {
    console.log(this.$options);
    const _this = this;
    Vue.component('router-myview', {
       render(createElement) {
         console.log(_this.routeMap['/'])
         return createElement(_this.routeMap['/'].component)
       }
    })
  }
}
