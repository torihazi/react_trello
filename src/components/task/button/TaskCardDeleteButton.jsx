import React from "react";

const TaskCardDeleteButton = (props) => {
  const { taskList, setTaskList } = props;
  return (
    <div>
      <button className="taskCardDeleteButton">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
