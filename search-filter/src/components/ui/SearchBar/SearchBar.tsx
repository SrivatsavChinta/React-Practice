import styles from "./SearchBar.module.scss";

type Props = {
  searchQuery: string;
  onSearch: (value: string) => void;
};

export const SearchBar = ({ searchQuery, onSearch }: Props) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Name..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={() => onSearch(searchQuery.trim())}>Search</button>
    </div>
  );
};
