/**
 *
 * 建设这模式 即使在新建对象的时候
 * 会有更多的操作
 * 也就是会有其他的对象来参与这个新对象的创建
 * 把所有的属性拼在一起返回
 *
 * */


function Human() {
    this.name = '';
    this.sex = '男'
}
function Named(str) {
    this.Named = str;
}
function Work(str) {
    this.work = str;
}


function Proson() {
    var _person = new Human();
    _person.name = new Named('sdasd');
    _person.work = new Work('fg');
    return _person;
}