import React from "react";

const TaskCardDeleteButton = (props) => {
  const { id, taskCardsList, setTaskCardsList } = props;

  const deleteTaskCard = (id) => {
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => deleteTaskCard(id)}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
