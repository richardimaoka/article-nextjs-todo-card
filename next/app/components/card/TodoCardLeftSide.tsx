import styles from "./TodoCardLeftSide.module.css";
import { TodoCardDescriptionArea } from "./medium/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./medium/TodoCardStatusBar";
import { TodoCardTabArea } from "./medium/TodoCardTabArea";
import { TodoCardTitleDisplay } from "./small/left/title/TodoCardTitleDisplay";
interface Props {}

export function TodoCardLeftSide(props: Props) {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitleDisplay title="Prepare breakfast for tomorrow" />
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
