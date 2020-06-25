console.log("Alleen");

let fs = require("fs"); //file systems module of node js to interact and do operations on file

console.log("Before File Read");

//synchronous operation
//let data = fs.readFileSync("./ModuleTest.js","utf-8"); //blocking the execution
//console.log("File Data", data);


//asynchronous operation
fs.readFile("./ModuleTestzxasdas.js","utf-8",(err, data)=>{ // This kind of callback are node special call back                     
  console.log("File Data", data);                    // and termed as error first callback
  console.log("Error ", err);
})


console.log("After File Read");