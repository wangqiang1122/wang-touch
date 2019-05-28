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
      (function (key) {
          Object.defineProperty(obj,key,{
              set(newVal) {
                  console.log(key)
                  _this.data[key] = newVal;
                  _this.document()
              },
              get() {
                  return  _this.data[key]
              },
          })
      })(key)
  }
  return obj
};
Vue.prototype.document = function () {
    console.log(this.data)
    var reg = /\{\{[^\}]*\}\}/g;   //
    this.el.innerHTML = '';
    var _this = this;
    this.el.innerHTML = this._html.replace(reg,function (key) {
        var str = key.match(/(?<={{)[\s\S]*(?=}})/g)[0];
        str = str.replace(/[^(\+|\*+\-|\/)]+/g,(args)=>{
            return '_this.data.'+args
        });
        console.log(str)
        return eval(str)
    });
};
