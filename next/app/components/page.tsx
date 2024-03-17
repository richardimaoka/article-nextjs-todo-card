import { TodoCardTitle } from "./TodoCardTitle";
import { TodoDueDate } from "./TodoDueDate";
import { TodoStatusLabel } from "./TodoStatusLabel";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitle title="arrr" />
      </div>

      <div>
        <TodoStatusLabel />
      </div>

      <div>
        <TodoDueDate />
      </div>
    </div>
  );
}
