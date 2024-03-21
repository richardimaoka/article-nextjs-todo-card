import { TodoCardWatchersTitle } from "./TodoCardWatchersTitle";
import { TodoCardWatcher } from "./TodoCardWatcher";
import styles from "./TodoCardWatchersArea.module.css";

interface Props {}

export function TodoCardWatchersArea(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardWatchersTitle />

      <div className={styles.watcherList}>
        <TodoCardWatcher />
        <TodoCardWatcher />
        <TodoCardWatcher />
      </div>
    </div>
  );
}
