const Todo = require("../models/todo.js");

const getAllTodos = async (req,res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send(todos)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}

const createTodo = async  (req,res) => {
    const todo = req.body
    const newTodo = new Todo(todo)
    try {
        await newTodo.save();
        res.status(201).json(newTodo)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}

const deleteTodo = async (req,res) => {
    const {id:_id} = req.params
    try {
        const deletedTodo = await Todo.findByIdAndDelete(_id);
        res.json(deletedTodo)
    }catch (err){
        res.status(404).json({
            message:err.message
        })
    }
}


module.exports = {
    getAllTodos,
    createTodo,
    deleteTodo
}
