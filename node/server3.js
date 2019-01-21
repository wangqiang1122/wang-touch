var http =require('http');
var url = require('url');
var querysgring = require('querystring');
var common = require('./lib/commit');
let path = require('path');
let fs = require('fs');
let uuidv4 = require('uuid/v4')

var serverhttp = http.createServer(function (requset,responens) {
    // console.log(url.parse(requset.url,true))

    // 接受urlencoded 的post数据 需要连接buffer数据
    var str= [];
    // console.log(requset.headers['content-type'].split('; ')[1].split('boundary='));
    let fen = `--${requset.headers['content-type'].split('; ')[1].split('boundary=')[1]}`; // 二进制文件浏览器的分割符 切割数据用
    console.log(fen)
    requset.on('data',function (data) {
        str.push(data)
    });
    requset.on('end',function () {  // 二进制数据的格式是http协议规定
        let totle = 0;
        let complete = 0;
        let post = {};
        let file = []
        var a = Buffer.concat(str);

        if (requset.headers['content-type'].startsWith('multipart/form-data')) { // 判断传进来的数据是否是二进制
            a = a.split(fen)
        }
        a.pop(); // 后面 后面去掉（'--'）
        a.shift(); // 前面 前面去掉('\r\n')
        a=a.map((item)=>{
            return item.slice(2,item.length-2) // 对每个数据去掉 前面的\r\n 和后面的\r\n
        });
        // console.log(a);

        a.forEach(item=>{
            let num = item.indexOf('\r\n\r\n'); // 切割
            let info = item.slice(0,num);
            let data = item.slice(num+4);
            info = info.toString();
            if (info.indexOf('\r\n')===-1){ // 是数据
                // console.log(common.infoparse(info).name);
                // console.log('我是字符串')
                // console.log(data.toString());
                post[common.infoparse(info).name] = data.toString();
            } else {
                let json = common.infoparse(info);
                console.log(json)
                file[totle] = {
                    name: json['name'],
                    type: json['Content-Type'],
                    filename: json['filename']
                };
                 totle++;
                let type = json['Content-Type'];
                let filename = json['filename'];
                let pathName = 'upload/'+uuidv4().replace(/\-/g,'')+path.extname(filename);
                // console.log(data)
                fs.writeFile(pathName,data,err=>{
                    file[complete]['code'] = 'success';
                    complete++;
                    console.log(err);
                    if (complete===totle) {
                        console.log(file)
                        console.log(post)
                    }
                })
            }
        })
    })
});

serverhttp.listen(1111);
