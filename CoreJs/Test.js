//Scope, Context and Call, Apply and => Bind

// bind :  Will keep holding the context and will not run immediately but supply the context when event is invoked


// var user = {
//     id: 42,
//     printId: function() { 
        
//         setTimeout(function() {
//             console.log("User Id is : ", this.id);
//         }, 1000);

//         //console.log("User Id is : ", this.id);
//     }
//    };

// user.printId();



//learning the call back function
// a callback function executes in the executer function with same context it was supplied at run time

var print = function (callbackFunction, param) { // a function could be recieved as a parameter is termed as call back function
    console.log("Printing the callback : ", callbackFunction(param));
}

// below functions can be passed as callback functions
function name() {
    return "Alleen";
}

function age(age) {
    return age;
}

print(name); //passing name as a callback function
print(age, 22); //passing name as a callback function and a related parameter