var obj1 = {a: '11',b:'111',c:{t:'1',name:'我是谁'}};
var obj2 = {a:'我是',b:'那么',d:'dddd',h: { name:'111', sex:'那么的' },c:{t:'2',name:'qin'}};
function deepCopy(data) {
    // console.log(data);
    var a  = {};
    for (var n in data) {
        if (typeof data[n] ==='object') {
            a[n] = deepCopy(data[n])
        } else {
            a[n] = data[n];
        }
    }
   return a
}
/**
 * 对象合并
 * */
function deepMerage(data1,data2){
   var obj = deepCopy(data1);
   for (var attr in data2) {
       var val1 = obj[attr];
       var val2 = data2[attr];
       if (typeof val1 ==='object'&& typeof val1 ==='object') {
           obj[attr] = deepMerage(val1,val2);
       }
       else if (typeof val1 ==='string' && typeof val2==='string') {
           obj[attr] = val1+val2
       }
       else if(typeof val2 ==='object') {
           obj[attr] = deepCopy(val2)
       }
       else{
           obj[attr] = val2
       }

   }
   return obj
}

var x = deepMerage(obj1,obj2);
x.h.name = '写';
console.log(x)

