const express  = require('./libs/express-m');
const logs = require('./libs/createlog');
const app = express();
app.listen('2222');
app.get(logs);
app.get('/',function (res,req,next) {
    console.log('a')
    req.send('fsdsdfsdfsdf')
});