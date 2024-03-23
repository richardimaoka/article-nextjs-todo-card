import { TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatusLabel.module.css";
import { backgroundColor } from "./statusColors";

interface Props {
  status?: TodoStatus;
}

export function TodoCardStatusLabel(props: Props) {
  const status = props.status ? props.status : "In Progress";
  const bgColor = backgroundColor(status);
  return (
    <div className={styles.component} style={{ backgroundColor: bgColor }}>
      {status}
    </div>
  );
}
