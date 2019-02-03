const express = require('express');
const session = require('cookie-session');
const app = express();
app.listen('2222');
// app.use(session({
//     secret: '111111', // session 加密签名尽量长 很难破解 或者 用循环密钥；
// }));
app.use(session({ // 循环密钥 默认是20分钟更换一次  在客户端不能用
    secret: [
      '111111',
      '2222222',
      '3333'
    ],
}));
app.get('/',function (req,res) {
  //   req.session['cache'] = '90圆'
  // console.log(req.session)
  //   res.end('hhhhh')
  if (req.session['count']){
      req.session['count']++
  } else {
      req.session['count'] =1;
  }
    res.send(`欢迎你第${ req.session['count']}到这个网站`);
    res.end();

});
