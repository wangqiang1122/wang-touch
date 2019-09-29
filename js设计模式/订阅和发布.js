function Event() {
    this.callbaks = {};
}
Event.prototype.on = function (name,callback) {
    // (this.callbaks[name] || this.callbaks[name]=[]).push(callback)
    // if ()
    this.callbaks[name] = this.callbaks[name]?this.callbaks[name].push(callback):[];
    this.callbaks[name].push(callback)
};
Event.prototype.emit = function (name,arg) {
    var arrs =  this.callbaks[name];
    console.log(arrs);
    for (var a=0; a<arrs.length;a++) {
        this.callbaks[name][a](arg)
    }
};

