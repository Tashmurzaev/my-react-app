import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      {counter} <br />
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={reset}>Reset </button>
    </div>
  );
};

export default Counter;
