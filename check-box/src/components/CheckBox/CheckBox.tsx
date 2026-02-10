import styles from "./Checkbox.module.scss";

export const CheckBox = () => {
  return (
    <div>
      <div className={styles.topLevelContainer}>
        <input
          type="checkbox"
          className={styles.topCheckBox}
          value="Top Level"
        />
      </div>
    </div>
  );
};
