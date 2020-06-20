// {} : JS Object as well as JSON object

// This is the literals way of creating an object
var User = {
    Name: "Blaz",
    Age : 18,
    Address : {
        Line1 : "Line1",
        Line2 : "Line2"
    },
    GetName : function () {
        return this.Name;
    }
}

module.exports = User;








// Creating and Object with Object contructor
//Example of Inheritance
//Using User Class and creating student object with new implementations

//var Student = new Object(User); // Drawback is it copies parent object so will change the parent as well
var Student = Object.create(User); // Accepts object that needs to be inherited without copying so new and better way to implement inheritance

Student.Name = "Dennis";
Student.Bio = "Blah Blah Blah";
Student.GetName = function () { //Overriding the GetName from User with additional return
    return {
        Bio: this.Bio,
        Name: this.Name
    }
}
Student.GetAddress = function () { //Overriding the GetName from User with additional return
    return this.Address
}


//module.exports = Student;

// Creating object with constructor function //Legacy way of creating object, important for interviews
var ConstFuncObj = function (name, age) { // as functions are first class members of js
    this.Name = name,
    this.Age = age,
    this.GetName = function () {
        return this.Name;
    }
}

var Employee = new ConstFuncObj("Alleen", 19); //Initial Employee object from constructor function
Employee.Bio = "Asdasd";
Employee.GetAddress = function (params) {
    return "New Line Address"
}


// module.exports = {
//     User,
//     Student,
//     Employee
// };


//user3 = Object.create(user2); //creates an object with prototype chain

//var user3 = Object.create(null); //to break the prototype chain or stop inheritance we use null
//Object.assign(user3, user2);