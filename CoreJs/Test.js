//Test : Module - is a javascript file in general

var userObj = require("./ModuleTest"); // we are importing js file here so that we can you

console.log("User ", userObj);
console.log("Get Name ", userObj.User.GetName())

console.log("Student Details : ", userObj.Student)
console.log("Student Get Name : ", userObj.Student.GetName())
console.log("Student Get Addess : ", userObj.Student.GetAddress())