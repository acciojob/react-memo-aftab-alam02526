import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import UseMemoExample from "./UseMemo";
import ReactMemoExample from "./ReactMemo";

export default function App() {
  const [todos, setTodos] = useState(["Learn React"]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const todoCount = useMemo(() => todos.length, [todos]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div id="main" className="app-container">
      <h1>React Hooks App</h1>

      <div className="counter-section">
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </div>

  
      <UseMemoExample onAddTodo={addTodo} todos={todos} count={todoCount} />

     
      <ReactMemoExample />
    </div>
  );
}


