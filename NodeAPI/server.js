console.log("This is the first caommand in server.js");
console.log("as a dev dependency : npm i express -D");
console.log("as a production dependency : npm i express");
console.log("Node Monitoring Tool : npm i nodemon -D");
console.log("To Install All Modules present in pkg json : npm i");


const express = require('express') //
const app = express() //
 
app.get('/HelloWorld', function (req, res) {
  res.send('Hello World')
})

app.get('/SecondAPI', function (req, res) {
    res.send('This is the second URI running in my node machine')
})

app.get('/', function (req, res) {
    res.send('Default Request')
})

app.listen(9000) //localhost:9000