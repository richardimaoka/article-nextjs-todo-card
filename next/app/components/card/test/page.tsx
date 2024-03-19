import { Thread } from "./Thread";
import { TodoForm } from "./TodoForm";
import styles from "./page.module.css";

interface Props {}

type TodoItem = {
  title: string;
  description: string;
};

export default async function Page() {
  const res = await fetch("http://localhost:3036/items/a");
  const item: TodoItem = await res.json();

  return (
    <div className={styles.component}>
      <TodoForm item={item} />
      <Thread
        messages={[
          { message: "msgg" },
          { message: "msgg" },
          { message: "msgg" },
        ]}
      />
    </div>
  );
}
