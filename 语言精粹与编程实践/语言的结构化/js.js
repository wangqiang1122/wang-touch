var x = 'outer';
function foo() {
    console.log(x);
    if(false) function x() {

    }
    console.log(x)
}
foo()
