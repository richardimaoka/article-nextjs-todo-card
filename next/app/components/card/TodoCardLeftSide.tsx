import styles from "./TodoCardLeftSide.module.css";
import { TodoCardDescriptionArea } from "./small/left/3-description/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./small/left/2-status/TodoCardStatusBar";
import { TodoCardTabArea } from "./small/left/4-tabs/TodoCardTabArea";
import { TodoCardTitleDisplay } from "./small/left/1-title/TodoCardTitleDisplay";
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
