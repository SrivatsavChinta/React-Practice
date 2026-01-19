import styles from "./Task.module.scss";
import { FaCheck } from "react-icons/fa6";

interface ITaskProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
}

export const Task = ({ task, completed, onToggle }: ITaskProps) => {
  return (
    <div className={styles.checkboxRoot}>
      <div className={styles.checkboxBox} onClick={onToggle}>
        {completed && <FaCheck className={styles.checkmark} />}
      </div>

      <span className={styles.label}>{task}</span>
    </div>
  );
};
