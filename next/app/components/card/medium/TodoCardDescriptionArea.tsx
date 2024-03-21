import styles from "./TodoCardDescriptionArea.module.css";
import { TodoCardDescriptionBody } from "../small/TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "../small/left/TodoCardDescriptionTitle";

interface Props {}

export function TodoCardDescriptionArea(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <TodoCardDescriptionTitle />
      </div>

      <TodoCardDescriptionBody />
    </div>
  );
}
