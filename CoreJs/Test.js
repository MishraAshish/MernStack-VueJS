// Destructuring : 
// Array Destructuring and Object Destructuring

let foo = ['one', 'two', 'three', 'four']; 
let [one, two, three, four = "four default"] = foo; //default
console.log(one); // "one" 
console.log(two); // "two" 
console.log(three); // "three"
console.log(four); // undefined

//swap the values
let a = 1, b = 3;

[a, b] = [b, a]; 
console.log(a); // 3 
console.log(b); // 1

//assignemnt separate of declaration
let c, d;
[c, d] = [21, 22]; 
console.log(c); // 3 
console.log(d); // 1

//assignemnt of rest of the array (spread)
let e, f;
[e, ...f] = [21, 22, 23, 24, 25, 26]; 
//[...e, f] = [21, 22, 23, 24, 25, 26];//spread and rest should be the last whereever used
console.log(e); // 3 
console.log(f); // 1


//Object Destructuring

const student = {
  firstname: 'Glad',
  lastname: 'Dennis',
  country: 'Nigeria'
};

// Object Destructuring
const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // Glad Chinda Nigeria

//nested object destructuring
const student1 = {
  name: 'John Doe',
  age: 16,
  scores: {
      maths: 74,
      english: 63
  }
};

const {name, scores: {maths}} = student1;

console.log(name, maths); // Glad Chinda Nigeria