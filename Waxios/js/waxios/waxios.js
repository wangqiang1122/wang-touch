import until from './until.js';
import defaultConfig from './defaultConfig.js';
import Interceptor from './Interceptor.js';


function Waxios(config) {
  this.config = until.merageConfig(defaultConfig, config);
  // 拦截器
  this.Interceptor = {
      request: new Interceptor(), // 请求拦截器
      response: new Interceptor(), // 返回拦截器
  };
}
Waxios.prototype.request = function (config) {
    console.log(this)
    //请求方法封装
    var Config = until.merageConfig(this.config,config);
    // 拦截器函数栈
    var chan = [this.dispatchRequest,undefined];
    /**
     * 求情拦截器
     * 接口请求之前先遍历request里面的函数
     * 返回拦截器
     * 接口发送请求之后需要先遍历response里面的函数
     */

    /**
     * 遍历请求拦截器押入栈内
     */
    // 请求拦截器拦截器
     while (this.Interceptor.request.handle.resolve.length) {
        chan.unshift(this.Interceptor.request.handle.resolve.shift(),this.Interceptor.request.handle.reject.shift())
    }
     // 返回拦截器
    while (this.Interceptor.response.handle.resolve.length) {
        chan.push(this.Interceptor.response.handle.resolve.shift(),this.Interceptor.response.handle.reject.shift())
    }
    var p = Promise.resolve(Config);
    // 遍历拦截器哈数栈 并执行里面的函数
    while (chan.length){
      p = p.then(chan.shift(),chan.shift())
    }
    return p
};
// 封装请求
Waxios.prototype.dispatchRequest = function (config) {
    console.log(config)
    return new Promise((resolve,reject)=>{
        var http = new XMLHttpRequest();
        http.open(config.method, config.baseUrl+config.url, true);
        for (var attr in config.headers) {
            http.setRequestHeader(attr , config.headers[attr])
        }
        // console.log(http.getAllResponseHeaders())
        http.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
        http.setRequestHeader('x-name', 'zmouse');
        http.setRequestHeader('token', 'zmouse');

        // http.setRequestHeader('content-type', 'application/json');
        http.onreadystatechange = function (response) {
            if (this.status ===200&&this.readyState===4) {
                var responseDate = {
                    config: config,
                    data:JSON.parse(this.response),
                    status: this.status,
                }
                resolve(responseDate)
            }
        };
        http.withCredentials = true;
        http.send();
    })
}
// 添加请求别名 无data
var method1 = ['delete', 'get', 'head', 'options' ];
while (method1.length) {
  var methodName = method1.pop();
    (function (methodName) {
        Waxios.prototype[methodName]=function (url,config) {
            return this.request(until.deepMerage(config||{},{
                url: url,
                method: methodName,
            }))
        }
    })(methodName)
}
// 添加请求别名 有data
var method2 = [ 'post', 'put', 'patch' ];

while (method2.length) {
    var method2Name = method2.pop();
    (function (methodName) {
        Waxios.prototype[methodName]=function (url,data,config) {
            return this.request(until.deepMerage(config||{},{
                url: url,
                method: method2Name,
                data: data||{},
            }))
        }
    })(method2Name)
}


export default Waxios;
