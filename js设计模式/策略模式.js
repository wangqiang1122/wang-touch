/**
 * 奖金计算 绩效为s的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，而绩效为B的人年终奖是2倍工资
 */

function CalculateBonus(performanceLevel, salary) {
   if (performanceLevel ==='a') {
       return (salary*4);
   }
   if (performanceLevel ==='b') {
       return salary*2;
   }
    if (performanceLevel ==='a') {
        return salary;
    }
}

// 策略模式的新的应用 就是 对象里的公共方法；
// 扩展性差的策略模式

var pulick = {
    name: function () {
        
    },
    age: function () {
        
    }
};

// 扩展性好的的策略模式

var strategies = {
    isNonEmpty: function( value, errorMsg ){
        if ( value === '' ){
            return errorMsg ;
        } },
    minLength: function( value, length, errorMsg ){
        if ( value.length < length ){
            return errorMsg;
        }
    },
    isMobile: function( value, errorMsg ){ // ⼿手机号码格式
        if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){
            return errorMsg;
        } }
};


function Validator() {
    this.cache = [];
}
Validator.prototype.add = function (dom,rule,errmsg) {
    var ary = rule.split( ':' );
    this.cache.push(function () {
       var a = ary.shift();
       ary.unshift(dom.value)
       ary.push(errmsg);
       return strategies[a].apply(dom,ary);
    });
    console.log(this.cache[0]())
};
Validator.prototype.start = function () {

};
var a = new Validator();

a.add(document.getElementById('input1'), 'minLength:6', '密码⻓长度不不能少于 6位')
