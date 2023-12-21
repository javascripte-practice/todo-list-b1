import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/helper/Card/Card";
import List from "./components/UI/List/List";
import Form from "./components/UI/Form/Form";

function App() {
  const [todos, setTodos] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const updateHandler = (id) => {
    // location.href = location.href + id;
    console.log(id);

    // const value = todos?.filter((t) => t?.id === id)[0];
    // setChangeTodoInput(value?.todo);
    // setIsUpdate(value);
  };

  const deleteHandler = (id) => {
    setTodos((todos) => {
      return todos?.filter((t) => t?.id !== id);
    });
  };

  return (
    <>
      <Card back-color={"blue"}>
        <h1>Todo List</h1>
      </Card>
      <Form setTodos={setTodos} />
      <List
        todos={todos}
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
      />
    </>
  );
}

export default App;
