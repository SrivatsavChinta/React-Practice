import { ToggleTheme } from "../ui/ToggleSwitch/ToggleTheme";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Task App</h1>

      <div className={styles.toggle}>
        <h2>Theme</h2>
        <ToggleTheme />
      </div>
    </header>
  );
};
