const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    todoName:String
})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = Todo;