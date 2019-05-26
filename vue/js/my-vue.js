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
    var reg = /\{\{[^\}]*\}\}/g;   //
    this.el.innerHTML = '';
    var _this = this;
    console.log(_this)
    this.el.innerHTML = this._html.replace(reg,function (key) {
        console.log(key)
        var str = key.match(/(?<={{)[\s\S]*(?=}})/g)[0];
        str = str.replace(/\w*\.\w*|\w/g,function (a) {
            return '_this.data.'+a+''
        });
        console.log(str)
        console.log(eval(str))
        return eval(str)
       // return _this.data[str];
    });
};
