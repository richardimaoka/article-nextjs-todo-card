import { TodoCardLabel } from "../small/TodoCardLabel";
import { TodoCardLabelsTitle } from "../small/TodoCardLabelsTitle";
import styles from "./TodoCardLabelsArea.module.css";

interface Props {}

export function TodoCardLabelsArea(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardLabelsTitle />

      <div className={styles.list}>
        <TodoCardLabel name="label" />
        <TodoCardLabel name="label" />
        <TodoCardLabel name="label" />
      </div>
    </div>
  );
}
