import { SearchBar } from "../Searchbar/SearchBar";
import styles from "./HomePage.module.scss";
import { members } from "../../data/members";
import { MemberCard } from "../MemberCard/MemberCard";
import { Pagination } from "../Pagination/Pagination";
import { useState } from "react";

export const HomePage = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedMembers = members.slice(startIndex, endIndex);

  return (
    <main className={styles.homePageContainer}>
      <h1>Pagination</h1>

      <SearchBar pageSize={pageSize} setPageSize={setPageSize} />

      <section className={styles.membersSection}>
        {paginatedMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            age={member.age}
            gender={member.gender}
          />
        ))}
      </section>

      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};
