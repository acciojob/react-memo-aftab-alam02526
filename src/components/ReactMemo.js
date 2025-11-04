import React, { useState, memo } from "react";

const Skill = memo(({ name }) => {
  return <li>{name}</li>;
});

const ReactMemoComponent = () => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const handleAddSkill = () => {
    if (input.trim() !== "") {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>React Memo testing</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter skill"
      />
      <button onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
};

export default ReactMemoComponent;

