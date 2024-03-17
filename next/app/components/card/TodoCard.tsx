import styles from "./TodoCard.module.css";
import { TodoCardLeftSide } from "./TodoCardLeftSide";
import { TodoCardRightSide } from "./TodoCardRightSide";

interface Props {}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <TodoCardLeftSide />
      </div>

      <div className={styles.right}>
        <TodoCardRightSide />
      </div>
    </div>
  );
}
