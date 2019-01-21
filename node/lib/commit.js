Buffer.prototype.split = Buffer.prototype.split||function (str) {
    let arr = [];
    let n ;
    let b = this;
    while ((n = b.indexOf(str)) !==-1){
        let result1 = b.slice(0,n);
        let result2 = b.slice(n+str.length);
        arr.push(result1);
        b = result2;
    }
    arr.push(b);
    return arr
};
// var buf = new Buffer('dasdadasd==dasdadasd==dasdahh==3333');
//
// console.log(buf.split('=='))
exports.infoparse = function (str) {
    let arr = str.split(/(; )/g); // http协议规定 是 'Content-Disposition: form-data; name="name"; aa="aaa"; langu="en"' 每个参数后面是分号和空格
    let josn = {};
    let arr2 = [];
    arr.forEach((item)=>{
        let a = (item.split('\r\n'));
        arr2= arr2.concat(a)
    });
    arr2.forEach(item=>{
        let [ key,value ] = [];
        if (item.indexOf('=')===-1) {
            [ key,value ] = item.split(':');
        } else {
            [ key,value ] = item.split('=');
        }
        if (!value) {
            josn[key] = value;
        } else {
            josn[key] = value.substring(1,value.length-1);
        }
    })
    return josn;
};
