import { TodoItem } from "@/app/api/types";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import styles from "./page.module.css";

export default async function Page() {
  const item: TodoItem = {
    id: "a",
    title: "a",
    description: "a",
    status: "In Progress",
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitleDisplay title="" />
      </div>
      <div>
        <TodoCardTitleDisplay title="go shopping in the morning" />
      </div>
      <div>
        <TodoCardTitleInput title="go shopping in the morning" />
      </div>
      <div>
        <TodoCardTitle item={item} />
      </div>
    </div>
  );
}
