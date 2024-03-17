import styles from "./TodoCardCommentAuthor.module.css";
import { TodoCardProfilePicture } from "../small/TodoCardProfilePicture";
import { TodoCardTimestamp } from "../small/TodoCardTimestamp";

interface Props {}

export function TodoCardCommentAuthor(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardProfilePicture />
      <TodoCardTimestamp />
    </div>
  );
}
