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
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardStatusLabel />
      </div>
      <div>
        <TodoCardStatusButton status="In Progress" />
      </div>

      <div>
        <TodoCardStatus status={"In Progress"} />
        <TodoCardStatus status={"Done"} />
        <TodoCardStatus status={"Canceled"} />
      </div>

      <TodoStatusSelect />
      <TodoCardDueDate />
    </div>
  );
}
