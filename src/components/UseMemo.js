import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [todos, setTodos] = useState([]);

  const todoCount = useMemo(() => todos.length, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, "new todo"]);
  };

  return (
    <div>
      <h2>Use Memo Component</h2>
      {/* Must match test case: 'Add Todo' */}
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <p>Total Todos: {todoCount}</p>
    </div>
  );
};

export default UseMemo;

