import { AddTodoButton } from "./components/AddTodoButton";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.component}>
      <AddTodoButton />
    </main>
  );
}
