import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/helper/Card/Card";
import List from "./components/UI/List/List";
import Form from "./components/UI/Form/Form";

function App() {
  const [users, setUsers] = useState([]);

  const deleteHandler = (id) => {
    setUsers((users) => {
      return users?.filter((u) => u?.id !== id);
    });
  };

  return (
    <>
      <Card back-color={"blue"}>
        <h1>Users List</h1>
      </Card>
      <Form setUsers={setUsers} />
      <List users={users} deleteHandler={deleteHandler} />
    </>
  );
}

export default App;
