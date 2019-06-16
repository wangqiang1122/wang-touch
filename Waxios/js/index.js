import Waios from './waxios/waxios.js';

var waxios = new Waios({
    baseUrl: 'http://localhost:2222',
    method: 'get',
});

waxios.request({
    url: '/login/get',

}).then((dara)=>{
    console.log(dara)
})

// waxios.request({
//     baseUrl: 'http://l222',
//     url: '/1'
// }).then()
