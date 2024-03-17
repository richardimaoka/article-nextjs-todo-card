import styles from "./TodoCard.module.css";
import { TodoCardDescriptionArea } from "./TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./TodoCardStatusBar";
import { TodoCardTabArea } from "./TodoCardTabArea";
import { TodoCardTitle } from "./TodoCardTitle";

interface Props {}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
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

      <div className={styles.right}>right</div>
    </div>
  );
}
