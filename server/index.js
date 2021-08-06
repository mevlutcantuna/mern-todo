const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')
const todoRouter = require("./routes/todos.js");

dotenv.config()
const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/",(req,res) => {
    res.send("Hello Everyone")
})

app.use("/todos",todoRouter)

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 5000,() => {
            console.log(`Working on ${process.env.PORT || 5000} PORT...` )
        })
    })
    .catch(err => console.log(err));