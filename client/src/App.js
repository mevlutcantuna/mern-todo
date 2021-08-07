import {useEffect, useState} from "react";
import {api} from "./utils/api";

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault()
    if(todo.trim() !== ""){
      api.post("/todos",{todoName:todo})
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
  }

  const deleteTodo = (id) => {
    api.delete(`/todos/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    api.get("/todos")
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
