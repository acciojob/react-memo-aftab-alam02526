import React, { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [todos, setTodos] = useState([]);

  // useMemo: derive count (to satisfy performance optimization)
  const todoCount = useMemo(() => todos.length, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div>
      <h2>Use Memo testing</h2>
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <p>Total Todos: {todoCount}</p>
    </div>
  );
}
