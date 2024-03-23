import styles from "./TodoCardStatusButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { TodoStatus } from "@/app/api/types";
import { backgroundColor, borderColor } from "./statusColors";

interface Props {
  status: TodoStatus;
}

export function TodoCardStatusButton(props: Props) {
  const bgColor = backgroundColor(props.status);
  const brdColor = borderColor(props.status);

  return (
    <FontAwesomeIcon
      className={styles.component}
      style={{ backgroundColor: bgColor, borderLeftColor: brdColor }}
      icon={faAngleDown}
    />
  );
}
