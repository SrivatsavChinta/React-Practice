import styles from "./TaskCard.module.scss";

import { type ITaskProps } from "../KanbanBoard/KanbanBoard";

export type TaskType = "todo" | "in-progress" | "completed";

export interface ITaskCardProps {
  task: ITaskProps;
  onDragStart: (id: number) => void;
}

export const TaskCard = ({ task, onDragStart }: ITaskCardProps) => {
  const { id, description, status, timeStamp } = task;

  return (
    <div
      className={styles.taskCard}
      draggable
      onDragStart={() => onDragStart(id)}
    >
      <div className={styles.taskIdContainer}>
        <h3>
          Task ID: <span className={styles.taskId}>{id}</span>
        </h3>
      </div>

      <div className={styles.taskDescriptionContainer}>
        <p className={styles.taskDescription}>{description}</p>
      </div>

      <div className={styles.taskInfo}>
        <div className={styles.taskStatus}>{status}</div>
        <div className={styles.taskTimeStamp}>{timeStamp}</div>
      </div>
    </div>
  );
};
