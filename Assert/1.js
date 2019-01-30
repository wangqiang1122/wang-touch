const assert = require('assert');
function n(a,b) {
    assert(typeof a === 'number'&& typeof b==='number','必须是文字');
    assert(b!==0,'b不能是0')
    return a/b;
}
console.log(n('1',0))