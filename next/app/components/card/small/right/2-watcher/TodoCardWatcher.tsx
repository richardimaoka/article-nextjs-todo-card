import { TodoCardWatcherPicture } from "./TodoCardWatcherPicture";
import styles from "./TodoCardWatcher.module.css";

interface Props {}

export function TodoCardWatcher(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardWatcherPicture />
    </div>
  );
}
