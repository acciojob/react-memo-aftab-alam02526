import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [todos, setTodos] = useState([]);

  // useMemo for optimization
  const todoCount = useMemo(() => todos.length, [todos]);

  const addTodo = () => {
    setTodos([...todos, "new todo"]);
  };

  return (
    <div>
      <h1>Use Memo testing</h1>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <p>Total: {todoCount}</p>
    </div>
  );
};

export default UseMemoComponent;

