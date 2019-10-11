/**
 * @param id
 * @constructor
 * 组合模式中的对象只能是一对多的关系，不能出现多对一
 * 组合模式 简单的理解就是多个子对象 组合成一个大的复杂多对象
 * 例如：下面的例子
 * 子组件是每个比较明确的子订单如 机票订单 旅店订单    具体的新建具体操作代码 是写在里面的
 * 组件集合 是总订单对象方法 可以把那个子订单加入进入，并且可以新建子菜单
 * 每个实例化的总菜单 都是相互独立的
 * 组合模式是一个典型的多态应用
 */


function RoderFight(id) {
  this.id = id
}
RoderFight.prototype.create = function () {
    console.log('新建一个机票订单'+this.id)
};

function RoderHotel(id) {
  this.id = id
}
RoderHotel.prototype.create = function () {
    console.log('新建一个旅店订单'+this.id)
};


// 新建一个总订单对象

function Menu() {
    this.orderList = [];
}
Menu.prototype.add = function (order) {
  this.orderList.push(order)
};
Menu.prototype.create = function () {
    this.orderList.forEach((item)=>{
        item.create();
    })
};

// 总订单内容
var menuL = new Menu();

// 新建飞机票订单
var fight1 = new RoderFight(1);
var fight2 = new RoderFight(2);

menuL.add(fight1);
menuL.add(fight2);

// 新建一个旅店订单
var hotel1 = new RoderHotel(55);
menuL.add(hotel1);
// 开始新建总订单

menuL.create()


