import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskAddInput = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputText === "") return;
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          maxLength="15"
          value={inputText}
          onPointerDown={(e) => e.stopPropagation()}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
