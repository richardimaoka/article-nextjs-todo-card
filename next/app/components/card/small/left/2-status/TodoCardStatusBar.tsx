import { TodoCardDueDate } from "./TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";

interface Props {}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardDueDate />
    </div>
  );
}
