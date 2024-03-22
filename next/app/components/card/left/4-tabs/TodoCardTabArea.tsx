import { TodoItem } from "@/app/api/types";
import { TodoCardCommentList } from "./comment/TodoCardCommentList";
import styles from "./TodoCardTabArea.module.css";
import { TodoCardTabBar } from "./TodoCardTabBar";

interface Props {
  item: TodoItem;
}

export function TodoCardTabArea(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardTabBar />
      <TodoCardCommentList item={props.item} />
    </div>
  );
}
