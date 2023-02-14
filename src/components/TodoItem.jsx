import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/actions";

const TodoItem = ({ edit, editClickHandler }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <>
          <li key={todo.id}>{todo.todo}</li>
          {edit === false && (
            <>
              <button onClick={() => editClickHandler()}>edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                delete
              </button>
            </>
          )}
        </>
      ))}
    </ul>
  );
};

export default TodoItem;
