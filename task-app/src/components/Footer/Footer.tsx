import { ToggleTheme } from "../ui/ToggleSwitch/ToggleTheme";
import { ToggleNotifications } from "../ui/ToggleSwitch/ToggleNotifications";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.toggle}>
        <h2>Notifications</h2>
        <ToggleNotifications />
      </div>

      <div className={styles.toggle}>
        <h2>Theme</h2>
        <ToggleTheme />
      </div>
    </footer>
  );
};
