let express = require('express');
let app = express();
const multer = require('multer');
const storage = multer.memoryStorage() // 让multer 有buffer 属性
const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs');
app.listen('4444');
let multerobj = multer({ dest:'./upload',storage:storage });
app.use(multerobj.any())
app.post('/upload',function (req,res,next) {
    console.log(req.files)
    let newName = uuid()+path.extname(req.files[0].originalname);
    console.log('./upload/'+newName)
   fs.writeFile('./upload/'+newName,req.files[0].buffer,err=>{
       if (err){

       }else {
           res.send('。。。成功');
           res.end();
       }
   })
});