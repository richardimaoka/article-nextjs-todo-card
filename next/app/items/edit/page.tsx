import { TodoCard } from "@/app/components/TodoCard";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <TodoCard />
    </div>
  );
}
