import styles from "./TodoCardDescriptionArea.module.css";
import { TodoCardDescriptionBody } from "../small/left/description/TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "../small/left/description/TodoCardDescriptionTitle";

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
