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