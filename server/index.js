const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')
const todoRouter = require("./routes/todos.js");

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello Everyone")
})

app.use("/todos",todoRouter)

mongoose
    .connect(process.env.DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log(`Working on ${process.env.PORT} PORT...` )
        })
    })
    .catch(err => console.log(err));