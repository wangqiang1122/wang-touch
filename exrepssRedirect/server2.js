let express = require('express');
let app = express();
let url = require('url');
app.listen(1111);
app.get('/a',function (request,response,next) {
    let { pathname,query } = url.parse(request.url,true);
    response.redirect('http://www.baidu.com')
});