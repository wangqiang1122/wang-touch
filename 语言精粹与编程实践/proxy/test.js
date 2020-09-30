import ProxyObject from './MyObjectProxy.js';
import MyObject from './MyObject.js';

var p = new ProxyObject;
console.log(p.value);

var obj = new MyObject;

console.log(obj.value);
