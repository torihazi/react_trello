import React from "react";

const Task = (props) => {
  const { task } = props;
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Task;
