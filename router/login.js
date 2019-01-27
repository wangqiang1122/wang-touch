let router = require('./router');
router.on('/login',function (res,rep) {
    console.log(res.query)
})
router.on('/res',function (res,rep) {
    console.log(res.query)
    rep.send({ code:1,mag:'陈工好'})
});
