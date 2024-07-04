import React from "react";

const Task = (props) => {
  const { task, taskList, setTaskList } = props;

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Task;
