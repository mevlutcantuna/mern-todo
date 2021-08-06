import {useEffect, useState} from "react";
import axios from "axios"

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault()
    if(todo.trim() !== ""){
      axios.post("http://localhost:5000/todos",{todoName:todo})
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
        .then(res => setTodos(res.data))
        .catch(err => console.log(err))
  })

  return (
   <>
    <form onSubmit={addTodo} typeof="submit">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="todo"/>
      <button type="submit">Add</button>
    </form>
     <div>
       {
         todos.map(todo => (
          <div style={{width:"12rem",display:"flex",justifyContent:"space-between"}} key={todo._id}>
            <span>{todo.todoName}</span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </div>
         ))
       }
     </div>
   </>
  );
}

export default App;
