import styles from "./TodoCardComment.module.css";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardCommentBody } from "../small/TodoCardCommentBody";

interface Props {}

export function TodoCardComment(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardCommentAuthor />
      <TodoCardCommentBody />
    </div>
  );
}