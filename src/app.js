const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post("/signup", async (req, res) => {

    const user = new User(req.body);
    
    // Creating new user from request (Hardcoded for now)
    
    // const user = new User({
    //     firstName: "Shiv",
    //     lastName: "Mane",
    //     emailId: "Shiv@mane.com",
    //     password: "Shiv@123",
    // });

    try{
        await user.save();
        res.send("User Added Successfully...");
    }catch (err){
        res.status(400).send("Error Saving the user:" + err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database Connection Established...");
        app.listen(7777, () => {
            console.log("Server is Successfully listening on port 7777...");
        });
    })
    .catch(() => {
        console.log("Database Cannot be connected...!");
    });
