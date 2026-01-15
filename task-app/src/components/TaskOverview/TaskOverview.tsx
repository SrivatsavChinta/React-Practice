import styles from "./TaskOverview.module.scss";
import { useTaskStore } from "../../store/taskStore";

export const TaskOverview = () => {
  const { mode, status } = useTaskStore();

  return (
    <div className={styles.overviewContainer}>
      <h2>Task Overview</h2>

      <div className={styles.taskDetailsContainer}>
        <ul className={styles.taskDetails}>
          <li>
            Status: <span className={styles.statusMode}>{status}</span>
          </li>
          <li>
            Tasks: <span className={styles.taskProgress}>0 / 0 Done</span>
          </li>
          <li>
            Mode: <span className={styles.focusMode}>{mode}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
