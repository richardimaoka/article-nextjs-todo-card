import { TodoItem } from "@/app/api/types";
import { TodoCardComment } from "./TodoCardComment";
import styles from "./TodoCardCommentList.module.css";

interface Props {
  item: TodoItem;
}

export function TodoCardCommentList(props: Props) {
  return (
    <div className={styles.component}>
      {props.item.comments &&
        props.item.comments?.map((x) => (
          <TodoCardComment key={x.id} item={props.item} comment={x} />
        ))}
    </div>
  );
}
