import { useState, useMemo } from "react";
import { initialItems } from "../../utils/utils";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const increment = () => {
    setCount(count + 1);
  };

  const selectedItem = useMemo(
    () => initialItems.find((item) => item.isSelected),
    [items]
  );
  return (
    <div>
      <h1>useMemo explained</h1>
      <h2>Number of Items: {count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
