const koa = require('koa');
const server = new koa();
const ejs = require('koa-ejs');
const mysql = require('./lib/mysql');
const dbs = mysql.createPool({ host: 'localhost', user: 'root', password: '12345678',database: 'an_ju_ke'});

server.listen('3333');
ejs(server,{
    root: './telemlate',
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true
});

server.use(async (ctx)=>{
    let a = await dbs.query('Select * from house_table');
    await ctx.render('a',{ ArrMane: a })
});