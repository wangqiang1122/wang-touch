module.exports =  function (source) {
   // 处理异步函数
   const b = this.async();
   setTimeout(()=>{
       b(null,source.replace(/webpack/g,'赖赖来'))
   },1000)
};