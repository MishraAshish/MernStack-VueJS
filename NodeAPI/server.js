const express = require('express') // when we use installed we need not to specify the path "./"
const app = express() //when we use paranthesis, this sets the base for our application infact creates an express app
const router = require("./router");
app.locals.port = 9000;

app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

/*
Here we will add application setting like 
*/

app.use("/",router);

app.listen(app.locals.port) //localhost:9000