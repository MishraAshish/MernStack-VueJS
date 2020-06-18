// ForIn and ForOF loop

//for in loop  
let person = {
  fname:"John", 
  lname:"Doe", 
  //lname:"asdas", 
  age:25,
  address : {line1: "", line2: ""}
};  

for (const key in person) {
  //if (person.hasOwnProperty(key)) { //check validation
    const element = person[key];
    console.log("Current Item : ", element)
  //}
}

var arr = [3, 5, 7, "MyVal"];
arr.myVal = "Hello";

for (let i of arr) {
  console.log(i); 
  // logs “3”, “5”, “7”
  //it is does not log “3”, “5”, “7”,”hello”

}


//for of loop  
 
let cars = ['BMW', 'Volvo', 'Mini'];

for (const iterator of cars) {
    console.log("Current Item For Of:",iterator)
}


