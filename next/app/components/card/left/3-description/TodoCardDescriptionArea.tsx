import { TodoItem } from "@/app/api/types";
import styles from "./TodoCardDescriptionArea.module.css";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
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

      <TodoCardDescriptionBody item={props.item} />
    </div>
  );
}
