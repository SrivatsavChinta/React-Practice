import styles from "./InputBox.module.scss";
import { useState } from "react";

export interface InputBoxProps {
  onAddTask: (task: string) => void;
}

export const InputBox = ({ onAddTask }: InputBoxProps) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim().length === 0) return;
    onAddTask(task);
    setTask("");
  };

  return (
    <div className={styles.inputBoxContainer}>
      <input
        type="text"
        placeholder="enter task"
        className={styles.inputField}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={styles.addTaskButton} onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};
