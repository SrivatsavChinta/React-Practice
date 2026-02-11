import styles from "./Checkbox.module.scss";

interface ICheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckBox = ({ label, checked, onChange }: ICheckBoxProps) => {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
