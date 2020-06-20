// Hoisting (Compiled and Interpreter)

console.log(hoistedVar); //variable hoisting - with undefined value as default

console.log(name()); // function gets hoisted with its definition so that it can be executed

var hoistedVar = "2020"; 

function name(params) {
  console.log("Blaz");
  return "Cyprian"
}


//function expression
// var name = function (params, param2) {
//   console.log("Covid-19");
//   return "Coronavirus"
// }

console.log(name());

// overwriting : functions over write all the previous function definitions except (funciton expression)
function name(params, param1) { // over loading doesn't exists in js
  console.log("Blaz 2");
  return "Cyprian 2"
}

console.log(name());