let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/nodeapi9");

let StudentModel = new schemaObj(
        {
            name: {type:String, required:true},
            age: {type:Number, required:true},
            bio: String,
            mobile:Number,
            adress: Object //{line1: "asdasd", line2:"dasdas" }
        },
        {
            versionKey: false //false - set to false then it wont create in mongodb
        }
    );

let StudentCollection = mongooseObj.model("student",StudentModel);//creating student collection using studentmodel /schema

module.exports = StudentCollection;