import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  const { taskList, setTaskList } = props;
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </div>
  );
};

export default Tasks;
