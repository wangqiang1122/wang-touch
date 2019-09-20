class CopyRightPlugin {
    constructor(options) {
      // options 传递的参数
      console.log(options);
      console.log('我触发了插件');
    }
    apply(compiler){
      //compiler 里面有很多钩子函数
        // 同步调用  只有一个参数 没有cb回调函数
        compiler.hooks.compile.tap('CopyRightPlugin',(compilation)=>{
            console.log('调用了同步方法了')
        });
        // 异步调用有两个方法
        compiler.hooks.emit.tapAsync('CopyRightPlugin',(compilation,cb) => { // 异步处理需要回调函数
            console.log('调用了异步方法了')
            // compilation本次打包的过程
            // cb回调函数 处理之后要调用cd() 你的处理数据才会生效
            console.log(compilation.assets);
            compilation.assets['add.txt'] = {
                source: function () {
                    return 'hello world'
                },
                size: function () {
                    return 1024
                }
            };
            cb()
        });
      console.log('我触发了插件里的apply')
    };
}

module.exports = CopyRightPlugin;