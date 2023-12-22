import React, { useState, useReducer } from "react";
import styles from "./Form.module.css";
import Card from "../../helper/Card/Card";

const Form = ({ setUsers }) => {
  const [changeFNameInput, setChangeFNameInput] = useState("");
  const [changeLNameInput, setChangeLNameInput] = useState("");
  const [changeAgeInput, setChangeAgeInput] = useState("");
  const [errFName, setErrFName] = useState(false);
  const [errLName, setErrLName] = useState(false);
  const [errAge, setErrAge] = useState(false);
  const [successFName, setSuccessFName] = useState(false);
  const [successLName, setSuccessLName] = useState(false);
  const [successAge, setSuccessAge] = useState(false);

  const changeFNameHandler = (e) => {
    const value = e?.target?.value;
    if (value.length < 3) {
      setErrFName(true);
    } else {
      setErrFName(false);
      setSuccessFName(true);
    }
    setChangeFNameInput(value);
  };
  const changeLNameHandler = (e) => {
    const value = e?.target?.value;
    if (value.length < 3) {
      setErrLName(true);
    } else {
      setErrLName(false);
      setSuccessLName(true);
    }
    setChangeLNameInput(value);
  };
  const changeAgeHandler = (e) => {
    const value = e?.target?.value;
    if (value < 18) {
      setErrAge(true);
    } else {
      setErrAge(false);
      setSuccessAge(true);
    }
    setChangeAgeInput(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const firstName = changeFNameInput?.trim();
    const lastName = changeLNameInput?.trim();
    const age = changeAgeInput;
    if (firstName.length < 3 || lastName.length < 3 || age < 18) {
      if (firstName.length < 3) setErrFName(true);
      if (lastName.length < 3) setErrLName(true);
      if (age < 18) setErrAge(true);
      return;
    }

    const person = {
      id: Date.now().toString(),
      firstName,
      lastName,
      age,
    };
    setUsers((prevUsers) => [...prevUsers, person]);
    setChangeAgeInput("");
    setChangeFNameInput("");
    setChangeLNameInput("");
    setSuccessAge(false);
    setSuccessFName(false);
    setSuccessLName(false);
  };

  return (
    <Card back-color={"grey"}>
      <form onSubmit={submitHandler} className={styles["form"]}>
        <label>
          <input
            type="text"
            placeholder="Firstname"
            className={`${styles["inputs"]} ${
              errFName ? styles["error"] : ""
            } ${successFName ? styles["success"] : ""}`}
            onChange={changeFNameHandler}
            value={changeFNameInput}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Lastname"
            className={`${styles["inputs"]} ${
              errLName ? styles["error"] : ""
            } ${successLName ? styles["success"] : ""}`}
            onChange={changeLNameHandler}
            value={changeLNameInput}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="age"
            className={`${styles["inputs"]} ${errAge ? styles["error"] : ""} ${
              successAge ? styles["success"] : ""
            }`}
            onChange={changeAgeHandler}
            value={changeAgeInput}
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
