import styles from "./TodoCardDueDate.module.css";

interface Props {
  dateString: string;
}

export function TodoCardDueDate(props: Props) {
  return <div className={styles.component}>{props.dateString}</div>;
}
