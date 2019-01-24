function create(prototype) {
    var a = function () {};
    a.prototype = prototype;
    a.prototype.constructor = a;
    return new a();
}

function resetConstructor(a,b) {
    var Super = function () {};
    Super.prototype = create(b.prototype);
    a.prototype = new Super();
    a.prototype.constructor = a;
}
function rondomInt(n,m) {
    return Math.floor((Math.random()*(m-n))+n);
}
function rondomY(n,m) {
    return ((Math.random()*(m-n))+n);
}