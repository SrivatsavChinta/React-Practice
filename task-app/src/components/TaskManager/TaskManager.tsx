import styles from "./TaskManager.module.scss";
import { InputBox } from "../ui/InputBox/InputBox";
import { Button } from "../ui/Button/Button";
import { useTaskStore } from "../../store/taskStore";
import { Task } from "../ui/Task/Task";

export const TaskManager = () => {
  const { taskList, toggleTask, filter, setFilter } = useTaskStore();

  const filterTasks = taskList.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "todo") return !task.completed;
    return true;
  });

  return (
    <div className={styles.taskManagerContainer}>
      <h2>Task Manager</h2>

      <div className={styles.taskContainer}>
        <div className={styles.taskSection}>
          <div className={styles.inputBox}>
            <InputBox />
          </div>

          <div className={styles.taskList}>
            {filterTasks.map((task, index) => (
              <div key={index} className={styles.taskItem}>
                <Task
                  task={task.text}
                  completed={task.completed}
                  onToggle={() => toggleTask(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <p>Filter By</p>
          <Button buttonTitle="All" func={() => setFilter("all")} />
          <Button buttonTitle="To Do" func={() => setFilter("todo")} />
          <Button buttonTitle="Completed" func={() => setFilter("completed")} />
        </div>
      </div>
    </div>
  );
};
