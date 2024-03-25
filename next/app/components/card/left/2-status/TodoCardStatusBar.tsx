import { TodoItem } from "@/app/api/types";
import { TodoCardDueDate } from "./TodoCardDueDate";
import styles from "./TodoCardStatusBar.module.css";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoCardStatus } from "./TodoCardStatus";

interface Props {
  item: TodoItem;
}

export function TodoCardStatusBar(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardStatus item={props.item} />
      <TodoCardDueDate dateString={props.item.dueDate} />
    </div>
  );
}
