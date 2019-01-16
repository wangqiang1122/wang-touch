function loadRouse(path) {
    return new Promise(function (resolve,reject) {
        var count = 0, index=0;
        let res = {};
        $.ajax({
            url: 'img/'+path,
            dataType: 'text',
            success:function (data) {
                var a = eval('('+data+')');
                for (let name in a) {
                    count++;
                    var img = new Image();
                    img.src = './img/'+a[name].src;
                    img.onload = function () {
                        res[name] = a[name];
                        res.img = this;
                        index++;
                        if (count === index) {
                            resolve(res)
                        }
                    }
                }
            },
            error:function (data) {
                reject(data);
            }
        });

    })
}

async function load_resourses() {
    var arr_src = {
        bottom: 'bottom.json',
        bullet: 'bullet.json',
        cannon: 'cannon.json',
        coin: 'coin.json',
        fish: 'fish.json',
        number: 'number.json',
        web: 'web.json',
    };
    var res_src = {};
    try {
        for (var i in arr_src){
            res_src[i]=await loadRouse(arr_src[i]);
        }
        return res_src
    } catch (e) {
        throw (e);
    }
}