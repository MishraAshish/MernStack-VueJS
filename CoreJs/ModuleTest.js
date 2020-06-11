// {} : JS Object as well as JSON object

// This is the literals way of creating an object
var User = {
    Name: "Brian",
    Age : 18,
    address : {
        Line1 : "Line1",
        Line2 : "Line2"
    }
}
//module.exports = User;

// Creating and Object with Object contructor
var Student = new Object(User);
//module.exports = Student;

// Creating object with constructor function //Legacy way of creating object, important for interviews
var ConstFuncObj = function (name, age) { // as functions are first class members of js
    this.Name = name,
    this.Age = age   
}

var Employee = new ConstFuncObj("Alleen", 19); //Employee object from constructor function

module.exports = Employee;