import React from "react";
import Task from "./Task";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Tasks = (props) => {
  const { taskList, setTaskList } = props;

  const getTaskPos = (id) => taskList.findIndex((task) => task.id === id);

  const handleTasksDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTaskList((prevList) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(prevList, originalPos, newPos);
    });
  };
  return (
    <div>
      <DndContext
        onDragEnd={handleTasksDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext
          items={taskList}
          strategy={verticalListSortingStrategy}
        >
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Tasks;
