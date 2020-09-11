// import * as myName from './a.js'; // 只适合webpack方式es6方式暂时不支持


// myName.f='222'
// console.log(myName);
var {a=100} = {};
console.log({100:a=100});
console.log(a)
console.log({100:a=100}={100:a=100})
