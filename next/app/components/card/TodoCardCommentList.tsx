import { TodoCardComment } from "./TodoCardComment";
import styles from "./TodoCardCommentList.module.css";

interface Props {}

export function TodoCardCommentList(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardComment />
      <TodoCardComment />
      <TodoCardComment />
    </div>
  );
}
