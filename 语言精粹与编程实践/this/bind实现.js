

function Bingz() {
    var that = arguments[0];
    var args = Array.from(arguments).slice(1);

}
Function.prototype.Bingz = function() {
    var xthat = arguments[0];
    var args = Array.from(arguments).slice(1);
    var self = this;
    console.log(self)
    return function() {
        self.apply(obj,args)
    }
    console.log(xthat)
    console.log(args)
}

obj = {
    a: '2'
}

function foo() {
    console.log(arguments)
    console.log(this.a);
}

foo.Bingz(obj,1111,22)()
