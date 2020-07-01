const express = require("express")
const router = express.Router({caseSensitive:true}),
studentModel = require("./DataModel/StudentModel");

router.get('/SaveStudent', function (req, res) {
    console.log(req.query);    

    //use the model to save data to mongodb
    let studentModelToSave = new studentModel(req.query)

    console.log("studentModelToSave", studentModelToSave);

    studentModelToSave.save((err, data)=>{
        console.log("err - ", err);
        console.log("data - ", data);

        if (err != null) {
            res.send("Unable to save data! "+ err);
        } else {
            studentModel.find((err, dataAll)=>{
                res.send(dataAll);
            })   
        }
    })

})



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