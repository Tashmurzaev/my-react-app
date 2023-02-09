import React, { useReducer } from "react";

const initState = {
  count: 10,
};

const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 10 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 10 };
  }
  if (action.type === "plus") {
    return { count: state.count + action.payload };
  }
};


const Couter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  

  const decrementFn = () => {
    dispatch({ type: "decrement" });
  };

  const incrementFn = () => {
    dispatch({ type: "increment" });
  };

  const plusFn = () => {
    dispatch({ type: "plus", payload: 200 });
  };

  return (
    <div>
      <h1>Couter: {state.count} </h1>
      <button onClick={incrementFn}>increment +</button>
      <button onClick={decrementFn}>decrement -</button>
      <button onClick={plusFn}>plus 200</button>
    </div>
  );
};

export default Couter;
