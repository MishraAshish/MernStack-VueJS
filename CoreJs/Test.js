// Functions - Superior of anything in js

//console.log(sum) // undefined : as function expression hoisted with undfined unlike functions which are hoisted with definition
//console.log(sum(5,6)) //error : as undefined can't be executed

function name(param1, param2, param3) {
    //body
    console.log("This is MERNStack")
}
//name() //invocation
//console.log(sum(2,3,4));
// Function expression 
// var sum = function (x, y) {
//     console.log("Function Expression");
//     return x+y;
// }

// console.log(sum(2,2))
// console.log(sum(2)) //y = undefined , NaN : Not a Number
// console.log(sum(2,3,4)) // 4:  ignored
// console.log(sum()) //x,y = undefined , NaN : Not a Number

// Function Overwriting no concept of overloading in javascript
console.log(sum())

function sum() {
    console.log("Function No Param");
    return 20;
}

function sum(x,y,z) {
    console.log("Function 1");
    return x+y+z
}

console.log(sum(2,3,4));

function sum(x) {
    console.log("Function 2");
    return x;
}

console.log(sum(2,3,4));

