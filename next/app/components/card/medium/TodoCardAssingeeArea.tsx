import { TodoCardAssignee } from "./TodoCardAssignee";
import { TodoCardAssigneeTitle } from "../small/right/TodoCardAssigneeTitle";
import styles from "./TodoCardAssingeeArea.module.css";

interface Props {}

export function TodoCardAssingeeArea(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardAssigneeTitle />
      <TodoCardAssignee name="Richard Imaoka" />
    </div>
  );
}
