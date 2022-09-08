function sum(a, b, c){
    const args = [...arguments]
    console.log(args)
    const add = a + b + c;
    return add;
}
const total = sum(12, 23, 45, 66, 78);
console.log(sum.length)
console.log(total);