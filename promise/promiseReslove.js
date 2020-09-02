let p = Promise.resolve();
console.log(p);

function f1() {
    console.log('f1')
}
function f2() {
    console.log('f2')
}
function f3() {
    console.log('f3')
}
function f4() {
    console.log('f4')
}
function f5() {
    console.log('f5')
}
p.then(flushCallbacks);

var g = [f1,f2,f3]
function flushCallbacks() {
  g.forEach(item=>{
      item();
  })
}

g.push(f4);
g.push(f5)
