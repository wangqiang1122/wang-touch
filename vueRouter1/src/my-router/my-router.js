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
          this.$options.Myrouter.init()
        }
      },
    });
  }

  constructor(json) {
    this.$options = json;
    this.routeMap = {};
    let that =this;
    this.app = new Vue({
      data: {
        current: that.gethash()||'/'
      }
    })
  }
  init() {
    this.createRouteMap(this.$options);
    this.gethash();
    this.bindevents();
    this.initComponent();
  }
  // 绑定事件
  bindevents() {
    window.addEventListener('hashchange',this.onhashchnahe.bind(this))
    window.addEventListener('load',this.onhashchnahe.bind(this))
  }
  // 路由映射表
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item
    });
  }
  // 获取路由hash值
  gethash() {
    console.log(window.location.hash.substr(1));
    return window.location.hash.substr(1)|| '/';
  }
  getcreatehash(e) {
    let to, from;
    if (e.type ==='load') {
      if (!location.hash) {
        window.location.href = `${window.location.href}#${this.app.current}`;
        return
      }
      to=location.hash.substr(1)||'/';
      from = '';
    } else if (e.type === 'hashchange') {
      to=e.newURL.split('#')[1];
      from=e.oldURL.split('#')[1];
    }
    return { to, from };
  }
  // 刷新组件内容
  initComponent() {
    const _this = this;
      Vue.component('router-myview', {
        render(createElement) {
          return createElement(_this.routeMap[_this.app.current].component)
        }
      })

  }

  onhashchnahe(e) {
    let { to ,from } = this.getcreatehash(e);
    let hash = this.gethash();
    let router = this.routeMap[hash]
    if (router.beforeEnter) {
      router.beforeEnter(to,from,()=>{
        this.app.current = hash;
      })
    } else {
      this.app.current = hash;
    }

  }
}
