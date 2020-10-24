// export var x = 200;
export function foo() {
    // console.log(this)
    return this;
}

export var f2 =  () => {
    // console.log(this)
    return this;
};
console.log(this);
