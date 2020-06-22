//Two new collections : Map and Set

let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {};

// setting the values 
myMap.set(keyString, "value associated with 'a string'"); 
myMap.set(keyObj, 'value associated with keyObj'); 
myMap.set(keyFunc, 'value associated with keyFunction'); 

console.log(myMap.size);

console.log(myMap.get('a string'))

console.log(myMap.delete(keyObj))
console.log(myMap.size);

console.log(myMap.delete(keyObj))
console.log(myMap.size);

myMap.set("session","MERNSTack Session")

console.log(myMap.values());

//Sets 

const set1  = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false


const set2  = new Set(["Test", "Test2", 3, 4, 5]);

console.log(set2.values());
// expected output: true