/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/
// 1. variable that is not initialized will give undefined
let first ;
// console.log(first)

// 2. function with no return 
function student (a, b){
    const total = a + b;
}
const result = student()
// console.log(result)

// 3. parameter that is not passed will be undefined

function ages (a, b, c, d){
    const total = a + b + c + d
    console.log(a, b, c, d)
}
// ages(10, 20)

// 4. if return has nothing on the right side will return undefined

function noNegative (a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b
}

const value = noNegative(2, -5)
// console.log(value)

// 5. property that doesn't exists on an object will give you undefined

const student1 = {id : 12, name : "alamin", age : 24}

// console.log(student1.name, student1.class)

// 6. accessing array elements outside of the index range

const number = [12, 23, 45, 67]

// console.log(number[2], number[5])

// 7. deleting an element inside an array

const number1 = [23, 45, 67, 89];
// you should not do it. Instead use splice
delete number1[1];

// console.log(number1);

// 8. set a value directly to undefined

//  never set undefined .. if need set null
const number2 = undefined;
const number3 = null;
console.log(number2);