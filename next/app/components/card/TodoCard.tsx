import styles from "./TodoCard.module.css";
import { TodoCardLeftSide } from "./TodoCardLeftSide";

interface Props {}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <TodoCardLeftSide />
      </div>

      <div className={styles.right}>right</div>
    </div>
  );
}
