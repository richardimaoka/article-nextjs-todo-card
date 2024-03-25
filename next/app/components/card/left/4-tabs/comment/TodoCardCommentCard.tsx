import { TodoComment, TodoItem } from "@/app/api/types";
import styles from "./TodoCardCommentCard.module.css";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardCommentBody } from "./TodoCardCommentBody";

interface Props {
  comment: TodoComment;
  item: TodoItem;
}

export function TodoCardCommentCard(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardCommentAuthor />
      <TodoCardCommentBody item={props.item} comment={props.comment} />
    </div>
  );
}
