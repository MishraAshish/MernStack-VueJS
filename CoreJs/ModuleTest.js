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

//module.exports = User;

// Creating and Object with Object contructor
//Example of Inheritance
//Using User Class and creating student object with new implementations

//var Student1 = new Object(User); // Drawback is it copies parent object so will change the parent as well

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


console.log( Student);
console.log( Student.GetName());
console.log( Student.GetAddress());


// Creating object with constructor function //Legacy way of creating object, important for interviews
var ConstFuncObj = function (name, age) { // as functions are first class members of js
    this.Name = name,
    this.Age = age,
    this.GetName = function () {
        return this.Name;
    }
}

var Employee = new ConstFuncObj("Blaz", 21); //Initial Employee object from constructor function
Employee.Bio = "Auto Bio";
Employee.GetAddress = function (params) {
    return "New Line Address"
}

console.log( Employee);
console.log( Employee.GetName());
console.log( Employee.GetAddress());


//bind : will attach the context at run time and returns function unlike call and apply which returns funciton execution


let userDetails = {
    name : "Blaz",
    age : 19,
    
    showDetails : function () {
      //this : context of userDetails object
      
      setTimeout(function() { //call back function of settimeout
          console.log({
            name: this.name, // this : is global context because settimeout executes without any context being set
            age: this.age
          })
      }.bind(this), // we are copying this which is userDetails as a context to settimeout callback
      3000); //waiting time in milli seconds        
    }
}

userDetails.showDetails();