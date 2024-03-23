import { TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatus.module.css";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { backgroundColor, borderColor } from "./statusColors";

interface Props {
  status: TodoStatus;
}

export function TodoCardStatus(props: Props) {
  const bgColor = backgroundColor(props.status);
  const brdrColor = borderColor(props.status);

  return (
    <div className={styles.component}>
      <TodoCardStatusLabel status={props.status} />
      <TodoCardStatusButton status={props.status} />
    </div>
  );
}
