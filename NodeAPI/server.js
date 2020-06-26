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