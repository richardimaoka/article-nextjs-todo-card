import styles from "./TodoCardCommentAuthor.module.css";
import { TodoCardProfilePicture } from "../small/left/4-tabs/comment/TodoCardProfilePicture";
import { TodoCardTimestamp } from "../small/left/4-tabs/comment/TodoCardTimestamp";

interface Props {}

export function TodoCardCommentAuthor(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardProfilePicture />
      <TodoCardTimestamp />
    </div>
  );
}
