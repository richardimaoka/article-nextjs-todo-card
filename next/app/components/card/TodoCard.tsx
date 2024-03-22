import { TodoItem } from "@/app/api/types";
import styles from "./TodoCard.module.css";
import { TodoCardLeftSide } from "./TodoCardLeftSide";
import { TodoCardRightSide } from "./TodoCardRightSide";

interface Props {
  item: TodoItem;
}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <TodoCardLeftSide item = {props.item} />
      </div>

      <div className={styles.right}>
        <TodoCardRightSide />
      </div>
    </div>
  );
}
