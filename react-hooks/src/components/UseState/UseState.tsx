import { useState } from "react";
import { ThemeProvider } from "../UseContext/ThemeProvider";

export const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <ThemeProvider>
        <h1>useState explained</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </ThemeProvider>
    </div>
  );
};
