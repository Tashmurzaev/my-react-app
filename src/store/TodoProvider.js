import { createContext, useContext, useState } from "react";

const initState = ["Learn React"];

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initState);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  const contextValue = {
    todoList,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
