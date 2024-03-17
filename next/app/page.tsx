import { AddTodoCardButton } from "./components/AddTodoCardButton";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.component}>
      <AddTodoCardButton />
    </main>
  );
}
