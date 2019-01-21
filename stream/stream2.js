// 文件的流操作
let fs = require('fs');
const zlib = require('zlib');
let gz =zlib.createGzip();
let rs = fs.createReadStream('../www/1.html');
// console.log(rs);
let ws = fs.createWriteStream('../www/2.html.gz');

rs.pipe(gz).pipe(ws); // 管道操作

