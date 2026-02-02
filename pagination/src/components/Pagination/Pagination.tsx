import styles from "./Pagination.module.scss";
import { MEMBERS_LENGTH } from "../../data/members";

export interface IPaginationProps {
  pageSize: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export const Pagination = ({
  pageSize,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const totalPages = Math.ceil(MEMBERS_LENGTH / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationContainer}>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        prev
      </button>
      {pageNumbers.map((page) => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
};
