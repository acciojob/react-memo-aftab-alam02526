import React, { useState, memo } from "react";

const SkillItem = memo(({ skill }) => {
  return <li>{skill}</li>;
});

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
    <div className="reactmemo-section">
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
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

