import { TodoCardDueDate } from "../small/left/2-status/TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "../small/left/2-status/TodoCardStatusLabel";

interface Props {}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardDueDate />
    </div>
  );
}
