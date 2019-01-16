const fs = require('fs');
fs.readFile('./a.jpeg',function (err,data) {
    console.log(data);
    fs.writeFile('./b.jpeg',data,err=>{

    })
});
