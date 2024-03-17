import { TodoCardTitle } from "./TodoCardTitle";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <TodoCardTitle title="arrr" />
    </div>
  );
}
