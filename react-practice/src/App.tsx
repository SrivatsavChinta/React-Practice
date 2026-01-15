import "./App.css";
import { useCounterStore } from "./store";
import { useEffect } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("Logged Count :", count);
};

export default function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="app">
      <OtherComponent count={count} />
    </div>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, []);

  return (
    <div>
      <h1>The count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};
