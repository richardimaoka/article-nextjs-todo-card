import { TodoItem, crateEmptyTodo } from "@/app/api/types";
import { ServerActionWrapper } from "@/app/components/ServerActionWrapper";
import { TodoCard } from "@/app/components/card/TodoCard";
import styles from "./page.module.css";

export default async function Page() {
  const item: TodoItem = crateEmptyTodo();

  return (
    <div className={styles.component}>
      <ServerActionWrapper>
        <TodoCard item={item} />
      </ServerActionWrapper>
    </div>
  );
}
