(function () {
   function Test() {

   }
    Test.prototype.a= '1111';
    Test.do = function () {

    }
    window.Test = Test

})();
console.log(new Test())
