function Vue(options) {
    this.data = options.data|| {};
    this.el = document.querySelector(options.el);
    this._html =  this.el.innerHTML
    this.document();
    return this.init();
}


Vue.prototype.init = function () {
  let obj = {};
  let _this = this;
  for (var key in this.data) {
      Object.defineProperty(obj,key,{
          set(newVal) {
              _this.data[key] = newVal;
              _this.document()
          },
          get() {
              return  _this.data[key]
          },
      })
  }
  return obj
};
Vue.prototype.document = function () {
    var reg = /{{[\s\S]*}}/g;
    this.el.innerHTML = '';
    var _this = this;
    this.el.innerHTML = this._html.replace(reg,function (key) {
       console.log( _this.data[key.match(/(?<={{)[\s\S]*(?=}})/g)[0]]);
       return _this.data[key.match(/(?<={{)[\s\S]*(?=}})/g)[0]];
    });
};