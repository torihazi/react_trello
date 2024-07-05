import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);

  const getTaskListPos = (id) =>
    taskCardsList.findIndex((taskCard) => taskCard.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTaskCardsList((prevList) => {
      const originalPos = getTaskListPos(active.id);
      const newPos = getTaskListPos(over.id);

      return arrayMove(prevList, originalPos, newPos);
    });
  };

  return (
    <div className="taskCardsArea">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext
          items={taskCardsList}
          strategy={horizontalListSortingStrategy}
        >
          {taskCardsList.map((taskCard) => (
            <TaskCard
              key={taskCard.id}
              id={taskCard.id}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          ))}
        </SortableContext>
      </DndContext>
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards;
