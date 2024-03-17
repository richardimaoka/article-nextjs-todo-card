import styles from "./TodoCardRightSide.module.css";
import { TodoCardAssingeeArea } from "./medium/TodoCardAssingeeArea";
import { TodoCardLabelsArea } from "./medium/TodoCardLabelsArea";
import { TodoCardWatchersArea } from "./medium/TodoCardWatchersArea";

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
