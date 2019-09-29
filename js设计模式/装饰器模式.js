Function.prototype.before = function (beforeFn) {
  var _this =this;
  return function () {
      beforeFn.call(_this,arguments);
      return _this.apply(_this,arguments)
  }
};

Function.prototype.after = function (beforeFn) {
    var _this =this;
    return function () {
       var ret =  _this.apply(_this,arguments)
       beforeFn.call(_this,arguments);
       return ret
    }
};


function a() {
    console.log('b')
    return 'da'
}
// a.before(function () {
//     console.log('a')
// })();
// a()
var o = a.after(function () {
    console.log('after')
})();


console.log(o)