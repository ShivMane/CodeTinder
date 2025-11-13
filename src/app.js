const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req,res) => {
    res.send("User data send");
})

app.get("/admin/getalldata", (req,res) => {
    res.send("All Data Sent");
})

app.get("/admin/deleteuser", (req,res) => {
    res.send("Deleted a User");
})

app.listen(7777, () => {
    console.log("Server is Successfully listining on port 7777...")
})


// app.use("/user", 
//     (req,res, next) => {
//         // next();
//         console.log("Handling the route user 1");
//         res.send("1st Response...");
//         // next();
//     },
//     (req,res) => {
//         console.log("Handling the route user 2");
//         res.send("2nd Response..."); 
//     }
// );


// app.use("/user", (req,res) => {
//     res.send("HAHAAHAHAHAHAHAHAHAHAH")
// })

// // THis will Only handle the /GET call to the user
// app.get("/user", (req,res) => {
//     res.send({ firstname: "Shivprasad", lastname: "Mane"});
// });

// // THis will Only handle the /POST call to the user
// app.post("/user", (req,res) => {
//     // Saving data to db
//     res.send("Data successfully stored to database")
// })

// app.delete("/user", (req,res) => {
//     // Deleting Data
//     res.send("Data Deleted Succcessfully...")
// })

// app.use("/hello",(req,res) => {
//     res.send("Hello hello hello")
// })

// app.use("/test",(req,res) => {
//     res.send("Hello From Server...")
// })

// app.use("/",(req,res) => {
//     res.send("Hello Shiv...")
// })

// app.use("/test1",(req,res) => {
//     res.send("Hello From Server... test1")
// })

// app.use("/",(req,res) => {
//     res.send("Hello Shiv...")
// })