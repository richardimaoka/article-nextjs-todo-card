"use client";

import { TodoItem, TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatus.module.css";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoStatusSelect } from "./TodoStatusSelect";
import { useContext, useState } from "react";
import { ServerActionContext } from "@/app/components/ServerActionContext";

interface Props {
  item: TodoItem;
}

export function TodoCardStatus(props: Props) {
  // Initial title from props upon first rendering
  const [initialStatus] = useState(props.item.status);
  const [status, setStatus] = useState(initialStatus);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  // Adjusting (stale) state when props change - https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (initialStatus !== props.item.status) {
    setStatus(props.item.status);
  }

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newStatus: TodoStatus) {
    setStatus(newStatus);
    setEdit(true);
  }

  async function editFinished(newSttus: TodoStatus) {
    // finish editing
    setStatus(newSttus);
    setEdit(false);

    if (doCallServerAction) {
      // updateTodoStatus(props.item.id, newSttus);
    }
  }

  return (
    <div className={styles.component}>
      <div className={styles.button}>
        <TodoCardStatusLabel status={status} />
        <TodoCardStatusButton status={status} />
      </div>

      <div className={styles.select}>
        <TodoStatusSelect currentStatus={status} />
      </div>
    </div>
  );
}
