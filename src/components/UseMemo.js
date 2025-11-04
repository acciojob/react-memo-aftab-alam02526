import React, { useMemo } from "react";

export default function UseMemoExample({ onAddTodo, todos, count }) {
  // useMemo — simulate a derived value
  const todoCount = useMemo(() => count, [count]);

  return (
    <div className="usememo-section">
      <h2>Use Memo testing</h2>
      <button onClick={onAddTodo}>Add todo</button>

      {/* ✅ Must have <ul> for Cypress */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <p>Total Todos: {todoCount}</p>
    </div>
  );
}
