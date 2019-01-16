// 切割二进制数据源
var buf = new Buffer('dasdadasd==dasdadasd==dasdahh==3333');

let n = buf.indexOf('==');
let result1 = buf.slice(0,n);
let result2 = buf.slice(n+2);
console.log(result1.toString())
console.log(result2.toString())

