import styles from "./TodoCardLeftSide.module.css";
import { TodoCardDescriptionArea } from "./left/3-description/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./left/2-status/TodoCardStatusBar";
import { TodoCardTabArea } from "./left/4-tabs/TodoCardTabArea";
import { TodoCardTitle } from "./left/1-title/TodoCardTitle";
import { TodoItem } from "@/app/api/types";

interface Props {
  item: TodoItem;
}

export function TodoCardLeftSide(props: Props) {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitle item={props.item} />
      </div>
      <div className={styles.status}>
        <TodoCardStatusBar />
      </div>
      <div>
        <TodoCardDescriptionArea
          item={props.item}
        />
      </div>
      <div>
        <TodoCardTabArea />
      </div>
    </div>
  );
}
