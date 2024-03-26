import styles from "./TodoCardTimestamp.module.css";

interface Props {
  createdAt: string;
}

export function TodoCardTimestamp(props: Props) {
  return <div className={styles.component}>commented at {props.createdAt}</div>;
}
