import styles from "./TodoCardStatusButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  backgroundColor?: string;
  borderColor: string;
}

export function TodoCardStatusButton(props: Props) {
  const color = props.backgroundColor ? props.backgroundColor : "#f4a267";
  return (
    <FontAwesomeIcon
      className={styles.component}
      style={{ backgroundColor: color, borderLeftColor: props.borderColor }}
      icon={faAngleDown}
    />
  );
}
