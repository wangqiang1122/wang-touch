const koa = require('koa');
const mysql = require('./lib/mysql');
const convert = require('koa-convert');
const server= new koa();
const dbs = mysql.createPool({ host: 'localhost', user: 'root', password: '12345678',database: 'an_ju_ke'});

server.listen('2222');
server.use(async (ctx)=>{
   let a = await dbs.query('Select * from house_table');
   ctx.response.body = a
});