// 文件的流操作
let fs = require('fs');
let rs = fs.createReadStream('../www/1.html');
// console.log(rs);
let ws = fs.createWriteStream('../www/2.html');
rs.pipe(ws); // 管道操作
rs.on('error',err=>{
    console.log('读取失败没有这个操作')
});
ws.on('error',err=>{
    console.log(err)
    console.log('读取失败没有这个操作')
});
ws.on('data',data=>{
    console.log(data)
    console.log('写入过程中')
});

rs.on('data',()=>{
    console.log('读取过程中')
});
rs.on('end',()=>{
    console.log('读取完成')
});
ws.on('finish',()=>{ // 不是end 是finish
    console.log('写入完成')
});
