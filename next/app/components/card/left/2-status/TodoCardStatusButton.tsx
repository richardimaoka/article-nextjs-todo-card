import styles from "./TodoCardStatusButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export function TodoCardStatusButton(props: Props) {
  return <FontAwesomeIcon className={styles.component} icon={faAngleDown} />;
}
