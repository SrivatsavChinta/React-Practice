import { useState, useEffect } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // code we want to run
    console.log(`The count is: ${count}`);

    // optional return function
    return () => {
      console.log("clean up triggered");
    };
  }, [count]); // dependency array

  return (
    <div>
      <h1>useEffect explained</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
