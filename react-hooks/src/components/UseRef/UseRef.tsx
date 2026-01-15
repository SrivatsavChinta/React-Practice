import { useRef, useState, useEffect } from "react";

// export const UseRef = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const increment = () => {
//     setCount(count + 1);
//     countRef.current++;

//     console.log("State: ", count);
//     console.log(countRef);
//     console.log("Ref: ", countRef.current);
//   };

//   return (
//     <div>
//       <h1>useRef explained</h1>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

export const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" placeholder="type something..." ref={inputRef} />
    </div>
  );
};
