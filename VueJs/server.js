const express = require("express");
const app = express();

const port = process.env.PORT || 9300;
const path = require("path");
const fs = require("fs");

const indexHTML =  (()=>{
    return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.get("*",(req, res) => {
    res.write(indexHTML);
    res.end()
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})
