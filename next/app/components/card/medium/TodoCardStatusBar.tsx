import { TodoCardDueDate } from "../small/TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "../small/TodoCardStatusLabel";

interface Props {}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardDueDate />
    </div>
  );
}
