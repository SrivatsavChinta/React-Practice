import styles from "./FilterBar.module.scss";

type Props = {
  selectedGender: string;
  selectedAgeRange: string;
  onGenderChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onClear: () => void;
};

export const FilterBar = ({
  selectedGender,
  selectedAgeRange,
  onGenderChange,
  onAgeChange,
  onClear,
}: Props) => {
  return (
    <div className={styles.filterBar}>
      <select
        value={selectedGender}
        onChange={(e) => onGenderChange(e.target.value)}
      >
        <option value="All Genders">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select
        value={selectedAgeRange}
        onChange={(e) => onAgeChange(e.target.value)}
      >
        <option value="All Ages">All Ages</option>
        <option value="20-30">20 - 30</option>
        <option value="30-40">30 - 40</option>
        <option value="40-50">40 - 50</option>
        <option value="50+">50+</option>
      </select>

      <button onClick={onClear}>Clear All</button>
    </div>
  );
};
