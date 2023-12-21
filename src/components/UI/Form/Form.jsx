import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../../helper/Card/Card";

const Form = ({ setTodos }) => {
  const [changeTodoInput, setChangeTodoInput] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const changeTodoHandler = (e) => {
    const value = e?.target?.value;
    setChangeTodoInput(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const value = changeTodoInput?.trim();
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
    setIsUpdate(false);
  };
  return (
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
  );
};

export default Form;
