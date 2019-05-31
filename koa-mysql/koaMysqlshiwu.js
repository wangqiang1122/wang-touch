const mysql = require('./koaMsql');
var dbs = mysql.createConnection({ host: 'localhost', port: '3306', user: 'root', password: '12345678', database: '20181116' });
dbs.beginTransaction(async (err)=>{
   if (err) {
       console.log('开启事务失败');
   } else {
       // try {
       //     let data = await dbs.queryC('SELECT * FROM user_table');
       // } catch (e) {
       //     dbs.rollback((err)=>{
       //         console.log('我回滚了1')
       //     })
       // }
      var a = await _catch('SELECT * FROM usr_table');
      var b = await _catch('DELETE FROM user_table where id = 1');
       // try {
       //     let data = await dbs.queryC('DELETE FROM user_table where ids = 1');
       //     console.log(data)
       // } catch (e) {
       //     dbs.rollback((err)=>{
       //         console.log('我回滚了2')
       //     })
       // }
       dbs.commit(err=>{
           if (err) {
               console.log('commit错误')
           } else {
               console.log('成功')
           }
       })

   }
});
async function _catch(sqlstr) {
    let data = await dbs.queryC(sqlstr);
    if (!data) {
        dbs.rollback((err)=>{
                console.log('我回滚了11111')
         })
    }
    // try {
    //     let data = await dbs.queryC(sqlstr);
    //     console.log(data)
    //     return data
    // } catch (e) {
    //     dbs.rollback((err)=>{
    //         console.log('我回滚了')
    //     })
    // }
}