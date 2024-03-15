import styles from "./AddTodoButton.module.css";

interface Props {}

export function AddTodoButton(props: Props) {
  return <button className={styles.component}>Add Todo</button>;
}
