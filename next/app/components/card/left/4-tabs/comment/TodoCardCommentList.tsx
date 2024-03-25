import { TodoItem } from "@/app/api/types";
import { TodoCardCommentCard } from "./TodoCardCommentCard";
import styles from "./TodoCardCommentList.module.css";
import { TodoCardCommentAddButton } from "./TodoCardCommentAddButton";
import { TodoCardNewComment } from "./TodoCardNewComment";

interface Props {
  item: TodoItem;
}

export function TodoCardCommentList(props: Props) {
  return (
    <div className={styles.component}>
      {props.item.comments &&
        props.item.comments?.map((x) => (
          <TodoCardCommentCard key={x.id} item={props.item} comment={x} />
        ))}
      <TodoCardNewComment item={props.item} />
    </div>
  );
}
