import styles from "./TodoCardAssigneeTitle.module.css";

interface Props {}

export function TodoCardAssigneeTitle(props: Props) {
  return <h2 className={styles.component}>Assignee</h2>;
}
