import styles from "./TaskManager.module.scss";
import { InputBox } from "../ui/InputBox/InputBox";
import { Button } from "../ui/Button/Button";

export const TaskManager = () => {
  const handleButton = () => {
    console.log("Button Clicked");
  };

  return (
    <div className={styles.taskManagerContainer}>
      <h2>Task Manager</h2>

      <div className={styles.taskContainer}>
        <div className={styles.taskSection}>
          <div className={styles.inputBox}>
            <InputBox />
          </div>

          <div className={styles.taskList}></div>
        </div>

        <div className={styles.filterSection}>
          <p>Filter By</p>
          <Button buttonTitle="All" func={handleButton} />
          <Button buttonTitle="Active" func={handleButton} />
          <Button buttonTitle="Completed" func={handleButton} />
        </div>
      </div>
    </div>
  );
};
