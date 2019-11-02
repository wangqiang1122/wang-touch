function CreatesingleLayer(fn) {  // 单例模式的方法类 没有缓存新建 有缓存返回缓存
    /*
    * 单例模式
    * 一个类仅有一个实例
    *  一直保持全局只有一个
    * */
    // 这是一个闭包函数
    var instance;
    return function (val) {
        console.log(val);
         if (instance) {
             instance.innerHTML = val;
             return instance
         } else {
             return instance=fn.apply(this)
         }
     }
}

function createModel() {
    var div = document.createElement('div');
    div.className = 'madel';
    div.innerHTML = '单例模式';
    document.body.appendChild(div);
    return div;
}
// 触发单例模式
function v() {
    return CreatesingleLayer(createModel)
}
