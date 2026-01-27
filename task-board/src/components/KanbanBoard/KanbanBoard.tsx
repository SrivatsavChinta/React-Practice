import styles from "./KanbanBoard.module.scss";
import { InputBox } from "../InputBox/InputBox";
import { useState } from "react";
import { TaskCard } from "../TaskCard/TaskCard";

export type TaskStatus = "todo" | "in-progress" | "completed";

export interface ITaskProps {
  id: number;
  description: string;
  status: TaskStatus;
  timeStamp: string;
}

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);

  const countToDo = tasks.filter((t) => t.status === "todo").length;
  const countInProgress = tasks.filter(
    (t) => t.status === "in-progress",
  ).length;
  const countCompleted = tasks.filter((t) => t.status === "completed").length;

  const addTask = (description: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        description,
        status: "todo",
        timeStamp: new Date().toLocaleString(),
      },
    ]);
  };

  const moveTask = (status: TaskStatus) => {
    if (draggedTaskId === null) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggedTaskId ? { ...task, status } : task,
      ),
    );
    setDraggedTaskId(null);
  };

  return (
    <main className={styles.kanbanBoardContainer}>
      <h1>Kanban Board</h1>
      <div className={styles.taskInputContainer}>
        <InputBox onAddTask={addTask} />
      </div>

      <div className={styles.workFlowStateContainer}>
        <div className={styles.workflow}>
          <h2>
            To Do: <span className={styles.countToDo}>{countToDo}</span>
          </h2>
          <div
            className={`${styles.workflowContainer} ${styles.toDoContainer}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => moveTask("todo")}
          >
            {/* First Task Card comes here */}
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDragStart={setDraggedTaskId}
                />
              ))}
          </div>
        </div>

        <div className={styles.workflow}>
          <h2>
            In Progress:{" "}
            <span className={styles.countInProgress}>{countInProgress}</span>
          </h2>
          <div
            className={`${styles.workflowContainer} ${styles.inProgressContainer}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => moveTask("in-progress")}
          >
            {tasks
              .filter((task) => task.status === "in-progress")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDragStart={setDraggedTaskId}
                />
              ))}
          </div>
        </div>

        <div className={styles.workflow}>
          <h2>
            Completed:{" "}
            <span className={styles.countCompleted}>{countCompleted}</span>
          </h2>
          <div
            className={`${styles.workflowContainer} ${styles.completedContainer}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => moveTask("completed")}
          >
            {tasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDragStart={setDraggedTaskId}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
