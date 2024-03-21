import styles from "./TodoCardCommentAuthor.module.css";
import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardTimestamp } from "./TodoCardTimestamp";

interface Props {}

export function TodoCardCommentAuthor(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardProfilePicture />
      <TodoCardTimestamp />
    </div>
  );
}
