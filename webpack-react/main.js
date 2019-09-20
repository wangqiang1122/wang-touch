// import './css/index.css';
// import './scss/index.scss';
// import './less/index.less';
// import _ from 'lodash'
// // import '@babel/polyfill'
// import { add } from './a';
// console.log(_);
//
//
// function f() {
//     console.log('4444')
// }
// f();
// add()
//
// const arr = [new Promise(() => {}), new Promise(() => {})];
//
// arr.map(item => {
//     console.log(item);
// });

document.addEventListener("click", () => {
    import(/* webpackPrefetch: true */"./click.js").then(({ default: func }) => {
     //需要用到 npm install --save-dev @babel/plugin-syntax-dynamic-import
        func();
    });
});

