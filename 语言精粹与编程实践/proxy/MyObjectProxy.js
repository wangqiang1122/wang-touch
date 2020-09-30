import MyObject from './MyObject.js';

var logger = {
    get: function (target,key) {
        console.log('-[INFO]-'+target._id,'acess key name',key)
        return target[key]
    }
}
var uuid = 0;
export default new Proxy(MyObject,{
    construct: function (...args) {
      console.log(Reflect)
      var newInstance = Reflect.construct(...args);
      console.log(newInstance);
      return new Proxy(Object.assign(newInstance,{ _id: ++uuid }),logger)
    }
})
