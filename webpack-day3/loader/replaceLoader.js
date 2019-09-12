const utils = require('loader-utils');  //官方推荐的处理工具

module.exports = function (soruce) {
    // this上有很多个方法参考：https://www.webpackjs.com/api/loaders/
    console.log(soruce); // 源文件的内容
    const options = utils.getOptions(this); // 需要用官方推荐的loader-utils工具处理一下再使用
    console.log(options);
    //如果有异步处理 需要用this.async 处理这个异步函数
    //定义一个异步处理理，告诉webpack,这个loader⾥里里有异步事件,在⾥面调用下这个异步
    //callback 就是 this.callback 注意参数的使⽤用
    const callback = this.async(); // 处理异步
    setTimeout(()=>{
        const result = soruce.replace(/赖赖来/g,options.name); // 需要返回的值
        /**
         *
         * 返回值可以添加四个参数
         *  err: Error | null,  第一个参数必须是 Error 或者 null
            content: string | Buffer, 第二个参数是一个 string 或者 Buffer。
            sourceMap?: SourceMap, 可选的：第三个参数必须是一个可以被这个模块解析的 source map。
            meta?: any    可选的：第四个选项，会被 webpack 忽略，可以是任何东西（例如一些元数据）。
         *
         * **/
        callback(null,result) // 第一参数是error不传 第二个参数是值
    },1000)


    // return soruce.replace(/webpack/g,options.name); // loader 必须要返回一个字符串
};