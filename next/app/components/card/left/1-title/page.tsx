import { TodoItem } from "@/app/api/types";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import styles from "./page.module.css";

export default async function Page() {
  const item: TodoItem = {
    id: "a",
    description: "a",
    description: "a",
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitleDisplay title="arrr" />
      </div>
      <div>
        <TodoCardTitleInput title="arrr" />
      </div>
      <div>
        <TodoCardTitle item={item} />
      </div>
    </div>
  );
}
