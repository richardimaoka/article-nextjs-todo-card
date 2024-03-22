import { TodoItem } from "@/app/api/types";
import styles from "./TodoCardDescriptionArea.module.css";
import { TodoCardDescription } from "./TodoCardDescription";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";

interface Props {
  item: TodoItem;
}

export function TodoCardDescriptionArea(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <TodoCardDescriptionTitle />
      </div>

      <TodoCardDescription item={props.item} />
    </div>
  );
}
