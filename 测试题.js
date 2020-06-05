let industry_list = [
    {
        "parent_ind" : "女装",
        "name" : "连衣裙",
        "key": ''

    },
    {
        "name": "女装"
    },
    {
        "parent_ind" : "女装",
        "name" : "半身裙"
    },
    {
        "parent_ind" : "女装",
        "name" : "A字裙"
    },
    {
        "name": "数码"
    },
    {
        "parent_ind" : "数码",
        "name": "电脑配件"
    },
    {
        "parent_ind" : "电脑配件",
        "name": "内存"
    },
];

let data = {};

industry_list.forEach(item=>{
    // console.log(item['parent_ind']);
    // console.log(item['name']);
    // if (item['name']===item['parent_ind']) {
    //     console.log(item);
    // }
    data[item['parent_ind']][item['name']] = item
});
console.log(data)
