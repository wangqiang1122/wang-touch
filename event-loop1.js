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
    setTimeout(()=>{
        console.log('222')
    },)
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
