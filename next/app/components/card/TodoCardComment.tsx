import styles from "./TodoCardComment.module.css";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardCommentBody } from "./TodoCardCommentBody";

interface Props {}

export function TodoCardComment(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.author}>
        <TodoCardCommentAuthor />
      </div>
      <TodoCardCommentBody />
    </div>
  );
}
