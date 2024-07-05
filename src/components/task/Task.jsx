import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = (props) => {
  const { task, taskList, setTaskList } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div
      className="taskBox"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <p className="taskText">{task.text}</p>
      <button
        className="taskTrashButton"
        onClick={() => handleDelete(task.id)}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Task;
