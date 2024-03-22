import { TodoCard } from "@/app/components/card/TodoCard";
import styles from "./page.module.css";
import { TodoItem } from "@/app/api/types";

export default async function Page() {
  const res = await fetch("http://localhost:3036/items/a");
  const item: TodoItem = await res.json();

  return (
    <div className={styles.component}>
      <TodoCard item={item} />
    </div>
  );
}
