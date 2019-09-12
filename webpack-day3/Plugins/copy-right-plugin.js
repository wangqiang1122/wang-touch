class CopyRightPlugin {
    constructor(options) {
      // options 传递的参数
      console.log(options);
      console.log('我触发了插件');
    }
    apply(compiler){
      //compiler 里面有很多钩子函数
      console.log('我触发了插件里的apply')
    };
}

module.exports = CopyRightPlugin;