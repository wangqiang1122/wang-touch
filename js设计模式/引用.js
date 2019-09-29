function fun1() {
  new Watcher('a','b',(val)=>{
      uodataW(val)
  })
}


function uodataW(d) {
    console.log(d)
}

fun1()