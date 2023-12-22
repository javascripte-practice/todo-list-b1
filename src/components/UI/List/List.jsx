import Card from "../../helper/Card/Card";
import styles from "./List.module.css";

const List = ({ users, deleteHandler }) => {
  return (
    <Card>
      <ul className={styles.list}>
        {users?.length > 0 ? (
          users.map((u) => {
            return (
              <li key={u?.id}>
                <span>{u?.firstName}</span>
                <span>{u?.lastName}</span>
                <span>{u?.age}</span>
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
                    onClick={deleteHandler.bind(null, u?.id)}
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
