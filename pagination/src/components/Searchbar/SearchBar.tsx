import styles from "./SearchBar.module.scss";

export interface ISearchBarProps {
  pageSize: number;
  setPageSize: (value: number) => void;
}

export const SearchBar = ({ pageSize, setPageSize }: ISearchBarProps) => {
  return (
    <section className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search Members"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>Search</button>

      <div className={styles.dropDown}>
        <p>Select rows per page:</p>
        <select
          name="pageSize"
          className={styles.pageSize}
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </section>
  );
};
