//Closures - implementation of Encapsulation : Nested function where child function is returned by parent 
// and exposes some of the elements of parent function to the outer world.


function closureOuter(name, age) {
    var amount = "200"; //public member
    var price = "25"; //public member
    var password = "abcde"; //private members

    return function closureInner(currency) {
        return {
            "amount": amount,
            "name" : name,
            "curreny" : currency,
            "price" : price + currency            
        }
    }

}

var closureFunc = closureOuter("Cyprian", 15); //invoking the outer function

console.log(closureFunc(" $ Dollar")); // invoking and printing the closure values, where inner function keeps hold of parent variables