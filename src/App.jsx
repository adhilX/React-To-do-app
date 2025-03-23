import { useState } from "react";
import "./App.css";

function App() {
  const [todo, addTodos] = useState([]);
  const [task, setTask] = useState({ name: "", checked: false });
  const [editIndex, setEdit] = useState(null);

  function HandelTask() {
    if (task.name.trim() !== "") {
      if(editIndex === null){
        addTodos([...todo, task]);

      }else{
        const editedTodu = [...todo]
        editedTodu[editIndex]= task
        addTodos(editedTodu)
        setEdit(null)
      }
      setTask({ name: "", checked: false });
    }
  }

  function togglechecked(index) {
    const newTask = [...todo];
    newTask[index].checked = !todo[index].checked;
    addTodos(newTask);
    console.log(todo[index]);
  }

  function DeleteTodo(index) {
    const UpdateTodo = todo.filter((__, i) => i !== index);
    addTodos(UpdateTodo);
  }

  function EditTodo(index){
    setTask(todo[index])
    setEdit(index)
  }

  return (
    
    <div className="todo-container">
      <h1 className="title">To-Do App</h1>
      <div className="input-container">
      <input
       className="todo-input"
        value={task.name}
        type="text"
        onChange={(e) => setTask({ name: e.target.value, checked: false })}
        placeholder="add your tasks"
      />
      <button className="add-btn" onClick={HandelTask}>+</button>
    </div>
      <div>
        <ul className="todo-list">
          {todo.map((value, index) => {
            return (
              <li
              className={`todo-item ${value.checked ? "completed" : ""}`}
                key={index}
              >
                <input
                  className="checkbox"
                  checked={value.checked}
                  onChange={() => togglechecked(index)}
                  type="checkbox"
                />
                <span className="task-text">{value.name}</span>
          
                <button className="edit-btn" onClick={() => EditTodo(index)}>✏</button>
                <button className="delete-btn" onClick={() => DeleteTodo(index)}>🗑</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
