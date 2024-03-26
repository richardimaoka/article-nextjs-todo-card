import { TodoComment, TodoItem } from "@/app/api/types";
import styles from "./TodoCardCommentCard.module.css";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardComment } from "./TodoCardComment";

interface Props {
  comment: TodoComment;
  item: TodoItem;
}

export function TodoCardCommentCard(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardCommentAuthor comment={props.comment} />
      <TodoCardComment item={props.item} comment={props.comment} />
    </div>
  );
}
