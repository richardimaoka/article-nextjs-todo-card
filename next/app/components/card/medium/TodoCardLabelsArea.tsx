import { TodoCardLabel } from "../small/right/3-label/TodoCardLabel";
import { TodoCardLabelsTitle } from "../small/right/3-label/TodoCardLabelsTitle";
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
