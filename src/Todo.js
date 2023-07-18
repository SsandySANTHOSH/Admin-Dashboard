import{useState} from "react";

export default function TodoComponent(){
   const [todos,setTodos] = useState([]);
 const[todo ,setTodo] = useState("")

 function handleinputchange(e){
    setTodo(e.target.value)
 }
   function handleTodo(){
let todoCopy =[...todos];
todoCopy.push(todo);
setTodos(todoCopy);
setTodo("");
   }
    return <div id="todo-form">
       <div> <input id="todo"  placeholder="Enter your task" onChange={handleinputchange} value={todo}/>
  <button onClick={handleTodo}>Add task</button></div>
  <div id="todo-list">
    <ul>
        {todos.map((e , index) =>
        <li key={index}>{e}</li>)}
    </ul>

  </div>
    </div>
}