import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FocusSession } from "../FocusSession/FocusSession";
import { TaskManager } from "../TaskManager/TaskManager";
import { TaskOverview } from "../TaskOverview/TaskOverview";
import styles from "./TaskApp.module.scss";

export const TaskApp = () => {
  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.taskDetailsContainer}>
        <TaskOverview />
        <FocusSession />
      </div>

      <TaskManager />

      <Footer />
    </div>
  );
};
