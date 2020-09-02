import axios from './waxios/index.js';

axios.Interceptor.request.use(function (config) {
    console.log(1)
    console.log(config)
    return config
});
axios.Interceptor.response.use(function (config) {
    console.log(2)
    console.log(config)
    return config.data
});

// axios({
//     url:'http://localhost:2222/login/getuser'
// }).then(function (data) {
//     console.log(data)
// });

console.dir(axios)
axios.get('http://localhost:2222/login/getuser').then(function (dara) {
    console.log(dara)
})
