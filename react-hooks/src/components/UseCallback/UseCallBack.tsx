import { useState, useCallback } from "react";
import Search from "./Search";
import { shuffle } from "../../utils/utils";

const allUsers = ["john", "alex", "george", "simon", "james"];

export const UseCallback = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text: string) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, []);

  return (
    <div>
      <h1>useCallback explained</h1>
      <div>
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user) => (
          <li style={{ listStyleType: "none" }} key={user}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};
