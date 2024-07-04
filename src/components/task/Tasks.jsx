import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  const { inputText, taskList } = props;
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Tasks;
