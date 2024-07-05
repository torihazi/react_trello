import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("today");

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e);
    setIsClick(true);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClick(false);
  };

  const handleBlur = (e) => {
    e.stopPropagation();
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
