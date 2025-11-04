import React, { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [num, setNum] = useState(0);

  const squared = useMemo(() => {
    console.log("Calculating square...");
    return num * num;
  }, [num]);

  return (
    <div className="memo-section">
      <h3>useMemo Example</h3>
      <p>Number: {num}</p>
      <p>Squared (memoized): {squared}</p>
      <button id="num-increment-btn" onClick={() => setNum(num + 1)}>
        Increase Number
      </button>
    </div>
  );
}
