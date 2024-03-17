import { TodoCardCommentList } from "./TodoCardCommentList";
import styles from "./TodoCardTabArea.module.css";
import { TodoCardTabBar } from "./TodoCardTabBar";

interface Props {}

export function TodoCardTabArea(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.tabbar}>
        <TodoCardTabBar />
      </div>
      <TodoCardCommentList />
    </div>
  );
}
