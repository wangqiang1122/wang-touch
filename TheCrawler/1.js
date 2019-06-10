var https = require('https');
var clinet = https.request({
    host: 'www.jianshu.com',
    method: 'get',
    path: '/users/recommended?seen_ids=&count=5&only_unfollowed=true',
    headers: { // 指定请求头
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        'cookie': 'locale=zh-CN; read_mode=day; default_font=font2; __yadk_uid=Pv0ftcixQHzPK9zgWWNPIKO6oTzcd9rz; remember_user_token=W1s4MzY4NzI2XSwiJDJhJDExJDBYeTFEcnloY1pCeEsvS2VjLlpzWE8iLCIxNTYwMTcxNDQwLjQwNDg1NyJd--24e6f925b5250506c5e914fb1931fc531b1cdb59; _m7e_session_core=66e4b9ff1c3bd8ffd33a7facd171f936; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1559449787,1559449806,1559466384,1560171445; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228368726%22%2C%22%24device_id%22%3A%221692efdf0a8234-069993eceab34f-36627102-1296000-1692efdf0a9209%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_utm_source%22%3A%22recommendation%22%2C%22%24latest_utm_medium%22%3A%22seo_notes%22%2C%22%24latest_utm_campaign%22%3A%22maleskine%22%2C%22%24latest_utm_content%22%3A%22note%22%7D%2C%22first_id%22%3A%221692efdf0a8234-069993eceab34f-36627102-1296000-1692efdf0a9209%22%7D; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1560174080'
    }
},(res)=>{
    var str = '';
    res.on('data', (chunk) => {
        str+=chunk
        // console.log(`响应主体: ${chunk}`);
    });
    res.on('end', () => {
        console.log(str.toString())
        // console.log('响应中已无数据');
    });
});
clinet.end()

