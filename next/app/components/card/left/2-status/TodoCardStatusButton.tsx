import { TodoStatus } from "@/app/api/types";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import styles from "./TodoCardStatusButton.module.css";
import { backgroundColor, borderColor } from "./statusColors";

interface Props {
  status: TodoStatus;
  // optional args, so that you can check component's design alone
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function TodoCardStatusButton(props: Props) {
  const bgColor = backgroundColor(props.status);
  const brdColor = borderColor(props.status);

  return (
    <button className={styles.component} onClick={props.onClick}>
      <FontAwesomeIcon
        className={styles.icon}
        style={{ backgroundColor: bgColor, borderLeftColor: brdColor }}
        icon={faAngleDown}
      />
    </button>
  );
}
