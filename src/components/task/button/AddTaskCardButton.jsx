import React from "react";
import { v4 as uuidv4 } from "uuid";

const AddTaskCardButton = (props) => {
  const { taskCardsList, setTaskCardsList } = props;

  const addTaskCard = () => {
    setTaskCardsList([
      ...taskCardsList,
      {
        id: uuidv4(),
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
