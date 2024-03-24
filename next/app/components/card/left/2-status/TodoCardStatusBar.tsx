import { TodoItem } from "@/app/api/types";
import { TodoCardDueDate } from "./TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";

interface Props {
  item: TodoItem;
}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatusLabel />
      <TodoCardDueDate dateString={props.item.dueDate} />
    </div>
  );
}
