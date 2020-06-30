const express = require("express")
const router = express.Router({caseSensitive:true});

router.get('/HelloWorld', function (req, res) {
    //res.send('Hello World')
    res.json(
      {
        Greet:'Hello World',
        Learn : "Express",
        "Express Object" : "Instantiate by parenthesis",
        name: req.query.name,
        age: req.query.age
      })
})
  
router.get('/SecondAPI', function (req, res) {
    res.send('This is the second URI running in my node machine')
})

router.get('/', function (req, res) {
    //res.send("<h1>Learning Express of MERNSTack<h1>")
    res.sendFile(__dirname+"/package.json")
})

router.get('*', function (req, res) {
    res.send("<h1>Learning Express of MERNSTack<h1>")
})


module.exports = router;