import axios from './waxios/index.js';

axios.Interceptor.request.use(function (config) {
    console.log(1)
    return config
});

axios({
    url:'http://localhost:2222/login/get'
}).then(function (data) {
    console.log(data)
});

console.dir(axios)
axios.get('http://localhost:2222/login/get').then(function (dara) {
    console.log(dara)
})
