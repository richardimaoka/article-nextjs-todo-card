import { TodoCardDueDate } from "../small/left/status/TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "../small/left/status/TodoCardStatusLabel";

interface Props {}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardDueDate />
    </div>
  );
}
