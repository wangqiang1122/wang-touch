/**
 * 多态：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果
 */



/**
 *  扩展性比较差的多态方法
 *  这个方法如果需要增加一种动物叫出声 需要写改两个地方
 *  如果在增加一个猫叫 需要修改makeSound方法 还需要增加一个新的类 显然这不是一个好方法
 */
 var makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('嘎嘎叫')
    } else if(animal instanceof Dog) {
        console.log('汪汪叫')
    }
 };


 function Duck() {

 }
 
 function Dog() {

 }

 // makeSound(new Duck());
 // makeSound(new Dog());

/***
 * 扩展性比较好的多态makeSound方法 我只是发出声音 具体是谁让发出的声音我不管
 * 具体教的叫声在对象类里面
 * makeSound1 只是去发出声音
 */

var makeSound1 = function (animal) {
    animal.makeSound()
}

function Dog1() {

}
Dog1.prototype.makeSound = function () {
    console.log('汪汪叫')
};
function Duck1() {

}
Duck1.prototype.makeSound = function () {
    console.log('嘎嘎叫')
};
makeSound1(new Dog1)
makeSound1(new Duck1)