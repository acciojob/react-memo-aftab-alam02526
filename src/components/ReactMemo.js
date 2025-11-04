import React, { useState, memo } from "react";

const Skill = memo(({ name }) => <li>{name}</li>);

export default function ReactMemoExample() {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = () => {
    if (inputValue.trim() !== "") {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>React Memo testing</h2>
      <input
        type="text"
        placeholder="Enter skill"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddSkill}>Add Skill</button>
      <ul>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
}


