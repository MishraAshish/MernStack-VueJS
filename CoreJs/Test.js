// ShortHand of key value pair if the key and variable name is same

//let cat = 'Miaow', dog = 'Woof',bird = 'Peet peet';
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

//ES-5 ways
let animals = {
  cat: cat,
  dog: dog,
  bird: bird
}

//ES-6 use just short hand to print values by just putting key of same name
let animalsES6 = {
  cat,
  dog,
  bird,
  //lion: "Lion Name"
}

console.log(animals);
console.log(animalsES6);