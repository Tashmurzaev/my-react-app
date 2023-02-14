import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoItem from "./components/TodoItem";
import { deleteAll } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const editClickHandler = (todo) => {
    setEdit(true);
    setEdit(todo);
  };

  return (
    <div className="App">
      <InputForm edit={edit} editTodo={editTodo} />
      <TodoItem editClickHandler={editClickHandler} edit={edit} />
      <button onClick={() => dispatch(deleteAll())}>Delete All</button>
    </div>
  );
}

export default App;
