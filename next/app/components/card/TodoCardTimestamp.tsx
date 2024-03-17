import styles from "./TodoCardTimestamp.module.css";

interface Props {}

export function TodoCardTimestamp(props: Props) {
  return <div className={styles.component}>Apr 4, 2024 at 14:00</div>;
}
