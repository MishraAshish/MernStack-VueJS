/////////
//generator functions

//////////////////
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    
    yield console.log("Subtraction : " + (num1-num2));
    
    yield console.log("Multiply : " + (num1*num2));
    
    yield console.log("Division : " + (num1/num2));
    
    return "Done with Operations";
}

let calculator = arithmetic(6,2);

calculator.next();
calculator.next();
calculator.next();
calculator.next();

console.log(calculator.next());