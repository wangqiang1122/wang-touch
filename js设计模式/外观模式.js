
function type(val) {
    var arr = {
        '[object String]': 'string',
        '[object RegExp]': 'RegExp',
        '[object Object]': 'Object',
        '[object Number]': 'Number',
        '[object Boolean]': 'Boolean',
    }
    return {}.toString.call(val).split(' ')[1].slice(0,-1);
}

// 这个就是外观模式的写法 就是参数兼容
function attr(val) {
    var type = type(val)
    switch (type) {
        case  'Boolean':
            alert(1)
            break
        case  'Number':
            alert(2)
            break
    }
}