import React from "react";
import { useState } from "react";
import { useTodoContext } from "../../store/TodoProvider";

const TodoForm = () => {
  const { addTodo, todoList } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const todoHandler = (e) => {
    setTodoItem(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    addTodo(todoItem);
    setTodoItem("");
  };

  const getTodoItemNumbers = () => todoList.length;

  return (
    <form onSubmit={submitTodoHandler}>
      <h2>Number of todo items: {getTodoItemNumbers()} </h2>
      <input type="text" value={todoItem} onChange={todoHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
