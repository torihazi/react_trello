import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = (props) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const { id } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="taskCard"
      // ref={setNodeRef}
      // {...attributes}
      // {...listeners}
      // style={style}
    >
      <div className="taskCardTitleAndTaskCardDeleteButtonArea">
        <TaskCardTitle />
        <TaskCardDeleteButton taskList={taskList} setTaskList={setTaskList} />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskCard;
