import styles from "./TodoCardRightSide.module.css";
import { TodoCardAssingeeArea } from "./right/1-assigneee/TodoCardAssingeeArea";
import { TodoCardLabelsArea } from "./right/3-label/TodoCardLabelsArea";
import { TodoCardWatchersArea } from "./right/2-watcher/TodoCardWatchersArea";

interface Props {}

export function TodoCardRightSide(props: Props) {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardAssingeeArea />
      </div>
      <div>
        <TodoCardWatchersArea />
      </div>
      <div>
        <TodoCardLabelsArea />
      </div>
    </div>
  );
}
