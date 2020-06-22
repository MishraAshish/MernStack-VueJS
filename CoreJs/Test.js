// Arrow Functions : Fat arrow functions 
//1.  Short hand to write functions

let name = (param)=>console.log(param);
name("God")

let sum = (a,b) => a+b;
console.log(sum(8,5))


let big = (a,b,c) => {
            let d= a+b;
            return d*c
          }

console.log(big(8,5,10))
//write an arrow function accepts three parameters it will add first add first two and then divide by third param
