import { TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatus.module.css";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";

interface Props {
  status: TodoStatus;
}

function backgroundColor(status: TodoStatus): string {
  switch (status) {
    case "In Progress":
      return "#f4a267";
    case "Canceled":
      return "#817d7b";
    case "Done":
      return "#54d3cd";
  }
}

function borderColor(status: TodoStatus): string {
  switch (status) {
    case "In Progress":
      return "#f3c29f";
    case "Canceled":
      return "#94908f";
    case "Done":
      return "#95dad6";
  }
}

export function TodoCardStatus(props: Props) {
  const bgColor = backgroundColor(props.status);
  const brdrColor = borderColor(props.status);

  return (
    <div className={styles.component}>
      <TodoCardStatusLabel status={props.status} backgroundColor={bgColor} />
      <TodoCardStatusButton backgroundColor={bgColor} borderColor={brdrColor} />
    </div>
  );
}
