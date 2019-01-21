// 切割二进制数据源
var buf = new Buffer('dasdadasd==dasdadasd==dasdahh==3333');


// console.log(result1.toString());


let str = 'Content-Disposition: form-data; name="name"; aa="aaa"; langu="en"\r\nContent-Type: text/plain';

let arr = str.split('; ');
let arr2 = [];
arr.forEach((item)=>{
    let a = (item.split('\r\n'));
    arr2= arr2.concat(a)
});
let josn = {};
// console.log(arr);
arr2.forEach(item=>{
    let [ key,value ] = [];
    if (item.indexOf('=')===-1) {
         [ key,value ] = item.split(':');
    } else {
         [ key,value ] = item.split('=');
    }
    josn[key] = value;
})
console.log(josn);
