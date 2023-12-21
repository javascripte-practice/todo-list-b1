import Card from "../../helper/Card/Card";
import styles from "./List.module.css";

const List = ({ todos, updateHandler, deleteHandler }) => {
  return (
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
  );
};

export default List;
