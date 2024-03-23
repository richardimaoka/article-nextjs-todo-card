import { TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatusLabel.module.css";

interface Props {
  status?: TodoStatus;
  backgroundColor?: string;
}

export function TodoCardStatusLabel(props: Props) {
  const status = props.status ? props.status : "In Progress";
  const color = props.backgroundColor ? props.backgroundColor : "#f4a267";
  return (
    <div className={styles.component} style={{ backgroundColor: color }}>
      {status}
    </div>
  );
}
