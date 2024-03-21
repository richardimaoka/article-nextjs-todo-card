import { TodoCardAssigneeName } from "../small/right/1-assigneee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "../small/right/1-assigneee/TodoCardAssigneePicture";
import styles from "./TodoCardAssignee.module.css";

interface Props {
  name: string;
}

export function TodoCardAssignee(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardAssigneePicture />
      <TodoCardAssigneeName name={props.name} />
    </div>
  );
}
