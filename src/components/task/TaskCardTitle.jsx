import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("today");

  const handleClick = () => {
    setIsClick(true);
    console.log(!isClick);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={inputCardTitle} />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
