// 切割二进制数据源
var buf = new Buffer('dasdadasd==dasdadasd==dasdahh==3333');

let n = buf.indexOf('==');
let result1 = buf.slice(0,n);
let result2 = buf.slice(n+2);
// console.log(result1.toString());

function split(buf,str) {
    let arr = [];
    let n ;
    let b = buf;
    while ((n = b.indexOf(str)) !==-1){
        console.log(n);
        let result1 = b.slice(0,n);
        let result2 = b.slice(n+2);
        arr.push(result1);
        b = result2;
    }
    arr.push(b)
    return arr.map(item=>{
        return item.toString();
    })
}
console.log(split(buf,'=='));
