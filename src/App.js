import React, { useState } from "react";

let globalId = 0;

function App() {
  const [task, setTasks] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTasks("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div>
      <h1>Best To Do App Ever</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTasks(event.target.value);
          }}
        />
        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                {" "}
                {item.todo}({item.id})
              </li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
