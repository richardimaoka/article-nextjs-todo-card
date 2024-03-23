import { TodoStatus } from "@/app/api/types";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import styles from "./TodoStatusSelect.module.css";

interface Props {
  currentStatus: TodoStatus;
}

export function TodoStatusSelect(props: Props) {
  return (
    <div className={styles.component}>
      {props.currentStatus !== "In Progress" && (
        <TodoCardStatusLabel status="In Progress" />
      )}
      {props.currentStatus !== "Done" && <TodoCardStatusLabel status="Done" />}
      {props.currentStatus !== "Canceled" && (
        <TodoCardStatusLabel status="Canceled" />
      )}
    </div>
  );
}
