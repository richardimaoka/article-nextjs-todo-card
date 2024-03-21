import styles from "./TodoCardDescriptionArea.module.css";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";

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
