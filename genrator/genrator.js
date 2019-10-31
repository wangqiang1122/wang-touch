function *f() {
    var a =1;
    var b = yield 1;

}

var a = f();
console.log();
var gen = a.next();
console.log(gen.value);
var gen1 = a.next();
console.log(gen1)
// gen.value.then((val)=>{
//   console.log(val);
//   console.log(a.next())
// })

// console.log(f())