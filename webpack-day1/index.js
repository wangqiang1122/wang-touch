// import a from './a';
// import b from './b';
//
// import img from './img/a.jpeg';
// import './index.scss'
//
// var img1 = new Image();
// img1.src = img;
// // img1.onclick = function(){alert()}
// document.querySelector('#root').appendChild(img1);
//
//
// a();
// b();
// function w() {
//     console.log('hahaah')
// }
// w();
//
// if (module.hot){  // module.hot 判断我们有没有开始HMR
//    module.hot.accept('./b',()=>{ // 监听我们想要监听的文件
//        console.log('我更新了')
//        b();
//    })
// }

import "@babel/polyfill";    // 没有@是babel是babel6    有@的是babel7的特性


let arr = [2,34,5];
let arr1 = [new Promise(()=>{}),new Promise(()=>{})]

arr.map(item=>{
    console.log(item)
});


