import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import UseMemoExample from "./UseMemo";
import ReactMemoExample from "./ReactMemo";

export default function App() {
  const [todos, setTodos] = useState(["Learn React"]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);


  const todoCount = useMemo(() => todos.length, [todos]);


  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (taskInput.trim().length > 5) {
      setTodos([...todos, taskInput.trim()]);
      setTaskInput("");
      setError("");
    } else {
      setError("Task must be more than 5 characters!");
    }
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div id="main" className="app-container">
      <h1>React To-Do + Counter</h1>

      <div className="counter-section">
        <h2 data-testid="counter-value">Counter: {counter}</h2>
        <button id="increment-btn" onClick={incrementCounter}>
          Increment
        </button>
      </div>

      <div className="todo-section">
        <h2>Todos ({todoCount})</h2>
        <button id="add-todo-btn" onClick={addTodo}>
          Add Todo
        </button>

        <ul>
          {todos.map((todo, index) => (
            <ReactMemoExample key={index} text={todo} />
          ))}
        </ul>

        <div className="input-section">
          <input
            id="task-input"
            type="text"
            placeholder="Enter custom task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button id="submit-btn" onClick={addCustomTodo}>
            Submit
          </button>
        </div>
        {error && <p id="error-msg" className="error">{error}</p>}
      </div>
          
      <UseMemoExample />
    </div>
  );
}

