// 切割二进制数据源
var buf = new Buffer('dasdadasd==dasdadasd==dasdahh==3333');

let n = buf.indexOf('==');
let result1 = buf.slice(0,n);
let result2 = buf.slice(n+2);
// console.log(result1.toString());
function split(buf,str) {
    let arr = [];
    function slice (res,str) {
        let n = res.indexOf(str);
        let result1 = res.slice(0,n);
        let result2 = res.slice(n+2);
        arr.push(result1)
        if (result2.indexOf(str)!==-1){
            slice(result2,str);
        } else {
            arr.push(result2)
        }
        return arr;
    }
    return slice(buf,str);
}
// console.log(split(buf,'=='));
split(buf,'==').forEach(function (item) {
    console.log(item.toString())
});

var arr = [1,23,5];
var a =arr.splice(0,1,'s');
console.log(a)

