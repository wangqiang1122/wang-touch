// 图片懒加载

var imgFunc = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setImg: function (imgUrl) {
            imgNode.src = imgUrl
        }
    }
})();
var ProxyImg = (function () {
    var img = new Image();
    img.onload = function (src) {
        imgFunc.setImg(src)
    };
    return {
        setSrc: function (src) {
            imgFunc.setImg('./loading.png'); // 懒加载默认图片
            img.src=src; // 需要加载的新图片
        }
    }

})();


// 截流及防抖
// 用法在一定时间内 只进行一次操作
// 例子 同步文件 把id收集在一起 到一定事件统一处理

var syncFile = function (arrIds) {
    arrIds.forEach(item=>{
        console.log(item) // 遍历出里面的数组id
    })
};
// 截流的用法 每隔一段事件函数执行一次
var proxySyncFile = (function () {
    var cache = []; // 一时间内的保存id
    var timer; // 保存定时器
    return function (id) {
        cache.push(id);
        if (timer) {
            return
        }

        timer = setTimeout(()=>{  // 一秒后统一的去处理
            syncFile(cache)
            clearTimeout(timer);
            cache = [];
            timer = null;
        },1000);
    }
})();

// 防抖模式  轮动事件停止之后 去执行具体的操作
// function debounce(fn, wait) {
//     var timeout = null;
//     return function() {
//         if(timeout !== null)   clearTimeout(timeout);
//         timeout = setTimeout(fn, wait);
//     }
// }
// function handle() {
//     console.log(Math.random());
// }
// window.addEventListener('scroll', debounce(handle, 1000));

// 截流的精确写法 是日期和定时器同时写在一起
// var throttle = function(func, delay) {
//     var timer = null;
//     var startTime = Date.now();
//     console.log(startTime)
//     return function() {
//         var curTime = Date.now();
//         var remaining = delay - (curTime - startTime);
//         var context = this;
//         var args = arguments;
//         clearTimeout(timer);
//         if (remaining <= 0) {
//             func.apply(context, args);
//             startTime = Date.now();
//         } else {
//             timer = setTimeout(func, remaining);
//         }
//     }
// }
// function handle() {
//     console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));

// 截流的另一种写法 用时间戳来计算事件
var throttle = function(func, delay) {
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));