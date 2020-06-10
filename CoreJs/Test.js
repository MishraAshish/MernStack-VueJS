//Hoisting : 

// Hoisting the process of creating a snap shot of all the variables and functions present in javascript file/module
var myName = undefined;

console.log(myName); //variable hoisting : variable is hoisted with default value "undefined" at the top of the function
name("Brian"); // function hoisting : functions get hoisted at the top with its definition so we can exceute even before defining it

myName = "Alleen"; //initialization of an identifier

function name(params) { //defining a function 
    console.log("Your name is :- ", params);
}

name(myName);