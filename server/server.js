const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..")));

let users = []; // store users temporarily

// SIGNUP
app.post("/signup", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    users.push({ email, password });

    res.send("Account Created Successfully 🎉");
});

// LOGIN
app.post("/login", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.send("Login Successful ✅");
    } else {
        res.send("Invalid Credentials ❌");
    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
