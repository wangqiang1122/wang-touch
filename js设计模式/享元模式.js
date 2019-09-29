/***
 * 享元模式
 *
 * 非享元模式 会创建100个对象 如果人数很多的化创建的
 * 新对象也会很多会导致占用很多的内存
 *
 * 享元模式就是对其进行优化
 * 新建一个对象就可以了 极大的减少了新建对象
 * 性别是内部状态，内衣是外部状态，通过区分这两种张状态，
 * 大大减少了系统中的对象数量，通常来讲，内部状态有多少种组合，
 * 系统中变最多存多少个对象，因为性别通常只有男女两种，所以该内衣厂商最多需要2个对象
 * */

//非享元模式

var Model = function (sex,underwear) {
    this.sex = sex;
    this.underwear = underwear;
}
Model.prototype.takePhoto = function () {
    console.log('sex='+this.sex+'underwear='+this.underwear)
}

var man = 50;
var women = 50;

// for (var a = 0;a<man;a++){
//     var l = new Model('man','裤子');
//     l.takePhoto();
// }
// for (var a = 0;a<women;a++){
//     var l = new Model('women','裙子');
//     l.takePhoto();
// }

// 享元模式
var g = new Model('man');
var k = new Model('women')

for (let a = 0;a<man;a++){
    g.underwear  = a
    g.takePhoto();
}
for (let a = 0;a<women;a++){
    k.underwear  = a
    k.takePhoto();
}
// 享元模式应用

// 弹窗 有四种情况 颜色不同 icon不同 文案可控制

function Dialog() {
    this.icon = '';
    this.fontStyle = '';
    this.background = ''
}
Dialog.prototype.success = function (message) {
    this.icon = '成功';
    this.fontStyle = '蓝色';
    this.background = message;
    var text = document.createElement('text');
    text.textContent = this.background;
    document.body.appendChild(text)
}
Dialog.prototype.error = function (message) {
    this.icon = '失败';
    this.fontStyle = '红色';
    this.background = message;
    var text = document.createElement('text');
    text.textContent = this.background;
    document.body.appendChild(text)
}
Dialog.prototype.worn = function (message) {
    this.icon = '警告';
    this.fontStyle = '黄色';
    this.background = message;
    var text = document.createElement('text');
    text.textContent = this.background
    document.body.appendChild(text)
}
var a = new Dialog(); // 享元模式 只用建立一个对象 多种形式共享一个对象

a.success('我是成功');
a.error('我是失败');
a.worn('我是警告');

