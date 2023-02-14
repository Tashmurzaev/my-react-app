import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

const InputForm = ({ edit }) => {
  const [todos, setTodos] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const todoObj = {
      id: new Date().toString(),
      todo: todos,
      completed: false,
    };
    dispatch(addTodo(todoObj));
    setTodos("");
  };

  return (
    <>
      {edit === false ? (
        <div>
          <input
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            type="text"
          />
          <button onClick={submitHandler}>add todo</button>
        </div>
      ) : (
        <div>
          <p>updated</p>
          <input value={todos} type="text" />
          <button onClick={submitHandler}>update</button>
        </div>
      )}
    </>
  );
};

export default InputForm;
