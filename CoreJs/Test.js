var mybool = true;

// or operator ( || )
// if (mybool || mybool === 1) {
//     console.log("Or Operator True (if)");
// } else {
//     console.log("Or Operator False (else)");
// }


// and operator ( && )
if (mybool && mybool == 1) { // double equal to operator : where it simply compares value not type
    console.log("And Operator True (if)");
} else {
    console.log("And Operator False (else)");
}

// triple equal-to operator : where it compares value as well as type
if (mybool && mybool === 1) { 
    console.log("And Operator True (if)");
} else {
    console.log("And Operator False (else)");
}

// >, <, <=, >= 