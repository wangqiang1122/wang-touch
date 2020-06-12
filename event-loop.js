
console.log('sjsjs')

// process.nextTick(function A() {
//     console.log(1);
//     process.nextTick(function B(){console.log(2);});
// });
//
// setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
// }, 0)




// new Promise((resolve)=>{
//     console.log('Promise1')
//     resolve();
// }).then(()=>{
//     console.log('Promisethen')
// })
//
// setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
// });
//
// setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
// }, 0);



// setImmediate(function (){
//     setImmediate(function A() {
//         console.log(1);
//         setImmediate(function B(){console.log(2);});
//     });
//
//     setTimeout(function timeout() {
//         console.log('TIMEOUT FIRED');
//     }, 0);
// });



// setTimeout(()=>{
//     console.log('timer1')
//
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)
//
// setTimeout(()=>{
//     console.log('timer2')
//
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)
//
// console.log(1)
// setTimeout(function() {
//     new Promise(function(resolve, reject) {
//         console.log(2)
//         resolve()
//     })
//         .then(() => {
//             console.log(3)
//         })
// }, 0)
//
// setTimeout(function() {
//     console.log(4)
// }, 0)



console.log('1')
setTimeout(function() {
    console.log('2')
    new Promise(function(resolve) {
        console.log('4')
        resolve()
    }).then(function() {
        console.log('5')
    })
    setTimeout(() => { console.log('6') })
    new Promise(function(resolve) {
        console.log('7')
        resolve()
    }).then(function() {
        console.log('8')
    })
})
setTimeout(function() {
    console.log('9')
}, 0)
new Promise(function(resolve) {
    console.log('10')
    resolve()
}).then(function() {
    console.log('11')
})
setTimeout(function() {
    console.log('12')
    new Promise(function(resolve) {
        console.log('13')
        resolve()
    }).then(function() {
        console.log('14')
    })
})
new Promise(function(resolve) {
    console.log('15')
    resolve()
}).then(function() {
    console.log('16')
})


