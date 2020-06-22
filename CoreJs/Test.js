//Two new collections : Map and Set

let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {};

let userObj = {
  name:"Alleen",
  age: 21
} 

let userObjDetails = {
  name:"Alleen",
  age: 21,
  adress:{
      add:"line1",
      add:"line2"
  },
  bio: "asdas",
  asda:"ASdas"
} 
// setting the values 
myMap.set(keyString, "value associated with 'a string'"); 
myMap.set(keyObj, 'value associated with keyObj'); 
myMap.set(keyFunc, 'value associated with keyFunction'); 

myMap.set(userObj, userObjDetails);

//console.log(myMap.values());

console.log(myMap.has(userObj))

console.log(myMap.get(userObj))