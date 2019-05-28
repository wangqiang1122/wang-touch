function Vue(options) {
    let obj = {};
    this.data = options.data|| {};
    this.el = document.querySelector(options.el);
    // 深度克隆
    this.$old_el = this.el.cloneNode(true);
    // this._html =  this.el.innerHTML;
    this.methods = options.methods;
    this.document(obj);
    this.init(obj);
    return obj;
}


Vue.prototype.init = function (obj) {
  let _this = this;
  for (var key in this.data) {
      (function (key) {
          Object.defineProperty(obj,key,{
              set(newVal) {
                  console.log(key)
                  _this.data[key] = newVal;
                  _this.document(obj)
              },
              get() {
                  return  _this.data[key]
              },
          })
      })(key)
  }
  return obj
};
Vue.prototype.document = function ($data) {
    var reg = /\{\{[^\}]*\}\}/g;   //
    // this.el.innerHTML = '';
    var _this = this;
    this.el.parentNode.replaceChild(this.$old_el,this.el);
    this.el = this.$old_el;
    this.$old_el = this.el.cloneNode(true)
    console.log( this.$old_el)
    this.el.innerHTML = this.el.innerHTML.replace(reg,function (key) {
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
               var fnEvent = b[i].name.substr(1);
               var fnName = b[i].value;
               if (!this.methods[fnName]) {
                   throw '没有这个方法';
               } else {
                   d[a].addEventListener(fnEvent,this.methods[fnName].bind($data||{}),false)
               }
            }
        }
    }
};
function expStr(key,data) {
    var str = key.replace(/[^(\+|\*+\-|\/)]+/g,(args)=>{
        return 'data.'+args
    });
    return eval(str)
}
