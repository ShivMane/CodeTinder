const express = require("express");

const app = express();

app.listen(7777, () => {
    console.log("Server is Successfully listining on port 7777...")
})

app.use("/test",(req,res) => {
    res.send("Hello From Server...")
})

app.use("/test1",(req,res) => {
    res.send("Hello From Server... test1")
})