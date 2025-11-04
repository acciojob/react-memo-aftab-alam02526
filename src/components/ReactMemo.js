import React from "react";

// ✅ React.memo prevents re-render if props unchanged
function ReactMemoExample({ text }) {
  console.log("Rendering Todo:", text);
  return <li className="todo-item">{text}</li>;
}

export default React.memo(ReactMemoExample);
