const express = require('express') // when we use installed we need not to specify the path "./"

//console.log(express); // its the object that has been returned raw from express module

const app = express() //when we use paranthesis, this sets the base for our application infact creates an express app
 
app.get('/HelloWorld', function (req, res) {
  //console.log("req ",req)
  //res.send('Hello World')
  res.json(
    {
      Greet:'Hello World',
      Learn : "Express",
      "Express Object" : "Instantiate by parenthesis",
      name: req.query.name
    })
})

app.get('/SecondAPI', function (req, res) {
    res.send('This is the second URI running in my node machine')
})

app.get('/', function (req, res) {
    //res.send("<h1>Learning Express of MERNSTack<h1>")
    res.sendFile(__dirname+"/package.json")
})

app.listen(9000) //localhost:9000