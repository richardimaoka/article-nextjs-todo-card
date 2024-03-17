import styles from "./TodoCardLeftSide.module.css";
import { TodoCardDescriptionArea } from "./medium/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./medium/TodoCardStatusBar";
import { TodoCardTabArea } from "./medium/TodoCardTabArea";
import { TodoCardTitle } from "./small/TodoCardTitle";
interface Props {}

export function TodoCardLeftSide(props: Props) {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitle title="Prepare breakfast for tomorrow" />
      </div>
      <div className={styles.status}>
        <TodoCardStatusBar />
      </div>
      <div>
        <TodoCardDescriptionArea />
      </div>
      <div>
        <TodoCardTabArea />
      </div>
    </div>
  );
}
