module.exports = function (routerLogin) {
    routerLogin.get('/',(req,res)=>{
        res.send('11111');
        res.end();
    })
}