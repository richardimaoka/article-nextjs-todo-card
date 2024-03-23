import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import styles from "./TodoStatusSelect.module.css";

interface Props {}

export function TodoStatusSelect(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel status="In Progress" />
      <TodoCardStatusLabel status="Done" />
      <TodoCardStatusLabel status="Canceled" />
    </div>
  );
}
