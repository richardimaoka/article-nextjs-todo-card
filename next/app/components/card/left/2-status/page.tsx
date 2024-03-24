import { TodoItem } from "@/app/api/types";

import styles from "./page.module.css";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatus } from "./TodoCardStatus";
import { TodoStatusSelect } from "./TodoStatusSelect";

export default async function Page() {
  const item: TodoItem = {
    id: "a",
    title: "a",
    description: "a",
    status: "In Progress",
    dueDate: new Date().toDateString(),
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardStatusLabel status={"In Progress"} />
        <TodoCardStatusLabel status={"Done"} />
        <TodoCardStatusLabel status={"Canceled"} />
      </div>

      <div>
        <TodoCardStatusButton status="In Progress" />
      </div>

      <div>
        <TodoStatusSelect currentStatus="In Progress" />
      </div>

      <div>
        <TodoCardStatus item={item} />
      </div>

      <TodoCardDueDate dateString={new Date().toDateString()} />
    </div>
  );
}
