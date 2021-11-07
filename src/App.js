import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, task];
    });
  }

  return (
    <div>
      <h1> Best Todo App</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
