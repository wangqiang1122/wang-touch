import until from './until.js';
import defaultConfig from './defaultConfig.js'


function Waxios(config) {
  this.config = until.merageConfig(defaultConfig, config);
  // 拦截器
  this.Interceptor = {
      request: [], // 请求拦截器
      response: [], // 返回拦截器
  };
}
Waxios.prototype.request = function (config) {
    //请求方法封装
    var Config = until.merageConfig(this.config,config);
    /**
     * 求情拦截器
     * 接口请求之前先遍历request里面的函数
     * 返回拦截器
     * 接口发送请求之后需要先遍历response里面的函数
     */
    var chan = [this.dispatchRequest];
    return this.dispatchRequest(Config)
};
// 封装请求
Waxios.prototype.dispatchRequest = function (config) {
    return new Promise((resolve,reject)=>{
        var http = new XMLHttpRequest();
        http.open('get',config.baseUrl+config.url,true);
        console.log(config.headers)
        for (var attr in config.headers) {
            http.setRequestHeader(attr , config.headers[attr])
        }
        console.log(http.getAllResponseHeaders())
        // http.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
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
                console.log(this)
                resolve(responseDate)
            }
        };
        http.withCredentials = true;
        http.send();
    })
}

export default Waxios;
