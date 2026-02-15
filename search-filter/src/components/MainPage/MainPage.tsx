import { SearchBar } from "../ui/SearchBar/SearchBar";
import { MemberCard } from "../ui/MemberCard/MemberCard";
import { FilterBar } from "../ui/FilterBar/FilterBar";
import { members } from "../../data/members";
import styles from "./MainPage.module.scss";
import { useState } from "react";
import checkAgeRange from "./helper";

export const MainPage = () => {
  const [selectedGender, setSelectedGender] = useState<string>("All Genders");
  const [selectedAgeRange, setSelectedAgeRange] = useState<string>("All Ages");
  const [searchQuery, setSearchQuery] = useState("");

  function handleClear() {
    setSelectedGender("All Genders");
    setSelectedAgeRange("All Ages");
    setSearchQuery("");
  }

  const filteredMembers = members.filter((member) => {
    const genderMatch =
      selectedGender === "All Genders" || member.gender === selectedGender;

    const { lower, upper } = checkAgeRange(selectedAgeRange);

    const ageMatch =
      selectedAgeRange === "All Ages" ||
      ((lower === null || member.age >= lower) &&
        (upper === null || member.age <= upper));

    const stringMatch =
      searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase());

    return genderMatch && ageMatch && stringMatch;
  });

  function filterByGender(gender: string) {
    setSelectedGender(gender);
  }

  function filterByAge(range: string) {
    setSelectedAgeRange(range);
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchBar}>
        <SearchBar
          searchQuery={searchQuery}
          onSearch={(value) => setSearchQuery(value)}
        />
      </div>

      <div className={styles.filterBar}>
        <FilterBar
          selectedGender={selectedGender}
          selectedAgeRange={selectedAgeRange}
          onGenderChange={filterByGender}
          onAgeChange={filterByAge}
          onClear={handleClear}
        />
      </div>

      <div>
        <p>Total Results: {filteredMembers.length} / 100</p>
      </div>

      <div className={styles.membersContainer}>
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
