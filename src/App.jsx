import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/helper/Card/Card";

function App() {
  const [todos, setTodos] = useState([]);
  const [changeTodoInput, setChangeTodoInput] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const changeTodoHandler = (e) => {
    const value = e?.target?.value;
    setChangeTodoInput(value);
  };

  const updateHandler = (id) => {
    const value = todos?.filter((t) => t?.id === id)[0];
    setChangeTodoInput(value?.todo);
    setIsUpdate(value);
  };

  const deleteHandler = (id) => {
    setTodos((todos) => {
      return todos?.filter((t) => t?.id !== id);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const value = changeTodoInput?.trim();
    console.log(isUpdate);
    if (!isUpdate) {
      setTodos((prevTodos) => {
        const obj = {
          id: Date.now().toString(),
          todo: value,
        };
        return prevTodos?.length > 0 ? [...prevTodos, obj] : [obj];
      });
    } else {
      setTodos((prevTodos) => {
        const newArr = prevTodos?.filter((t) => t.id !== isUpdate?.id);
        const obj = {
          id: isUpdate?.id,
          todo: value,
        };
        return prevTodos?.length > 0 ? [...newArr, obj] : [obj];
      });
    }
    setChangeTodoInput("");
  };
  return (
    <>
      <Card back-color={"blue"}>
        <h1>Todo List</h1>
      </Card>
      <Card back-color={"green"}>
        <form onSubmit={submitHandler} className={styles["form"]}>
          <label>
            <input
              type="text"
              placeholder="Todo ..."
              className={styles["inputs"]}
              onChange={changeTodoHandler}
              value={changeTodoInput}
            />
          </label>
          <button className={styles["btn"]} type="submit">
            Save
          </button>
        </form>
      </Card>
      <Card>
        <ul className={styles.list}>
          {todos?.length > 0 ? (
            todos.map((t) => {
              return (
                <li key={t?.id}>
                  <span>{t?.todo}</span>
                  <span
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      type="button"
                      className={styles["btn"]}
                      onClick={updateHandler.bind(null, t?.id)}
                    >
                      etid
                    </button>
                    <button
                      type="button"
                      className={styles["btn"]}
                      onClick={deleteHandler.bind(null, t?.id)}
                    >
                      delete
                    </button>
                  </span>
                </li>
              );
            })
          ) : (
            <li
              style={{
                backgroundColor: "red",
                boxShadow: "3px 3px 10px black",
              }}
            >
              Hozircha ma'lumotlar yo'q
            </li>
          )}
        </ul>
      </Card>
    </>
  );
}

export default App;
