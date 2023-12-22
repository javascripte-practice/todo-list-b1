import React, { useReducer } from "react";
import styles from "./Form.module.css";
import Card from "../../helper/Card/Card";
import { initialUser, reducerUser, actionTypes } from "./formReducer";

const Form = ({ setUsers }) => {
  const [user, dispatchUser] = useReducer(reducerUser, initialUser);

  const changeFNameHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: actionTypes?.firstName, payload: value });
  };
  const changeLNameHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: actionTypes?.lastName, payload: value });
  };
  const changeAgeHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: actionTypes?.age, payload: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const firstName = user?.firstName?.val?.trim();
    const lastName = user?.lastName?.val?.trim();
    const age = user?.age?.val;
    const person = {
      id: Date.now().toString(),
      firstName,
      lastName,
      age,
    };
    setUsers((prevUsers) => [...prevUsers, person]);
    dispatchUser({ type: actionTypes?.resetUser });
  };

  return (
    <Card back-color={"grey"}>
      <form onSubmit={submitHandler} className={styles["form"]}>
        <label>
          <input
            type="text"
            placeholder="Firstname"
            className={`${styles["inputs"]} ${
              user?.firstName?.err ? styles["error"] : ""
            } ${user?.firstName?.succ ? styles["success"] : ""}`}
            onChange={changeFNameHandler}
            value={user?.firstName?.val}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Lastname"
            className={`${styles["inputs"]} ${
              user?.lastName?.err ? styles["error"] : ""
            } ${user?.lastName?.succ ? styles["success"] : ""}`}
            onChange={changeLNameHandler}
            value={user?.lastName?.val}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="age"
            className={`${styles["inputs"]} ${
              user?.age?.err ? styles["error"] : ""
            } ${user?.age?.succ ? styles["success"] : ""}`}
            onChange={changeAgeHandler}
            value={user?.age?.val}
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
