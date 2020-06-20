// Operators :
// or (||), and (&&), equalto (==), less than(<), greater than(>) ....

//double and triple (equalto (===), less than equalto (<==)) ...

var myVal = true;

if (myVal && myVal === 1) { //triple equal to - compare value as well as type
  console.log("Print MyVal True Case");  
} else {
  console.log("Print MyVal False Case");
}

if (myVal && myVal == 1) {
  console.log("Print MyVal True Case");  
} else {
  console.log("Print MyVal False Case");
}

if (myVal || myVal == 1) {
  console.log("Print MyVal True Case");  
} else {
  console.log("Print MyVal False Case");
}