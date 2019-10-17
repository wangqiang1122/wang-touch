Function.prototype.before = function (beforeFn) {
  var _this =this;
  return function () {
      // console.log(arguments)
      var s = beforeFn.call(_this,arguments);
      console.log(s);
      console.log(arguments);
      return _this.apply(_this,[arguments,s])
  }
};

Function.prototype.after = function (beforeFn) {
    var _this =this;
    return function () {
       var ret =  _this.apply(_this,arguments);
       beforeFn.call(_this,{arguments,ret});
       return ret
    }
};


function a() {
    console.log(arguments)
    return 'da'
}
var b = a.before(function () {
    // console.log(arguments)
    return 's'
});
console.log(b('hhhh'))
// b('hhhh');
// a('hhhh')



// var o = a.after(function () {
//     console.log(arguments)
//     console.log('after')
// });
//
//
// console.log(o('1'))