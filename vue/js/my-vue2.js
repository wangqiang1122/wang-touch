function Vue(options) {
    this.data = options.data|| {};
    this.el = document.querySelector(options.el);
    this._html =  this.el.innerHTML;
    this.methods = options.methods;
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
    var reg = /\{\{[^\}]*\}\}/g;   //
    this.el.innerHTML = '';
    var _this = this;

    this.el.innerHTML = this._html.replace(reg,function (key) {
        var str = key.match(/(?<={{)[\s\S]*(?=}})/g)[0];

        return expStr(str,_this.data)
    });
    // 处理属性
    var d = this.el.getElementsByTagName('*');
    d = [].slice.call(d)
    d.push(this.el);
    for (var a =0 ;a<d.length;a++){
        var b = d[a].attributes;
        for (var i=0;i<b.length;i++) {
            if (b[i].name.indexOf(':')!==-1) {
                var name = b[i].name;
                var value = expStr(b[i].value,this.data)
                console.log(value)
                d[a].removeAttribute(name);
                d[a].setAttribute(name.substr(1),value);
            } else if (b[i].name.indexOf('@')!==-1) {

            }
        }
    }
};
Vue.prototype.event = function () {

};
function expStr(key,data) {
    var str = key.replace(/[^(\+|\*+\-|\/)]+/g,(args)=>{
        return 'data.'+args
    });
    return eval(str)
}
