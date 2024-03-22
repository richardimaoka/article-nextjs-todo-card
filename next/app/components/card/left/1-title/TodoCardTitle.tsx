"use client";

import { updateTodoItem } from "@/app/api/api";
import { TodoItem } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { useContext, useState } from "react";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";

interface Props {
  item: TodoItem;
}

export function TodoCardTitle(props: Props) {
  // Initial title from props upon first rendering
  const [initialTitle] = useState(props.item.description);
  const [title, setTitle] = useState(initialTitle);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  // Adjusting (stale) state when a prop changes - https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (initialTitle !== props.item.description) {
    setTitle(props.item.description);
  }

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setTitle(newTitle);
    setEdit(true);
  }

  async function editFinished(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    // finish editing
    setTitle(newTitle);
    setEdit(false);

    // call server action
    updateTodoItem(doCallServerAction, newItem);
  }

  return edit ? (
    <TodoCardTitleInput
      title={title}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardTitleDisplay title={title} onClick={editStart} />
  );
}
