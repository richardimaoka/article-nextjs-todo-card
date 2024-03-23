import styles from "./TodoCardStatus.module.css";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";

interface Props {}

export function TodoCardStatus(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardStatusButton />
    </div>
  );
}
