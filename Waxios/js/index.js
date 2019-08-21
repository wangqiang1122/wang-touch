import Waios from './waxios/waxios.js';

var waxios = new Waios({
    baseUrl: 'http://localhost:2222',
    method: 'get',
});
// waxios.Interceptor.request.use((config)=>{
//     console.log(config)
//     console.log('1')
//     return config
// });
// waxios.Interceptor.request.use((config)=>{
//     console.log('2')
//     return config
// })
// waxios.Interceptor.response.use(()=>{
//     console.log('3')
//     return 'aaaa'
// });
// console.log(waxios)

waxios.get(
     '/login/get',
).then((dara)=>{
    console.log(dara)
})

// waxios.request({
//     baseUrl: 'http://l222',
//     url: '/1'
// }).then()
