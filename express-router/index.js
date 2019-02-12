let express = require('express');
const app = express();
const login = require('./login');
app.listen('1111');

let routerLogin = express.Router(); // 创建路由deng
let routerLoginVip = express.Router(); // 创建路由deng


app.use('/login',routerLogin);
login(routerLogin);

routerLogin.use('/vip',routerLoginVip);
routerLoginVip.get('/',function (req,res) {
    res.send('你是vip');
    res.end();
});

app.use('/art',require('./article'));

