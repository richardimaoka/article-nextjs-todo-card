"use client";

import { TodoItem } from "@/app/api/types";
import { useContext, useState } from "react";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { updateTodoItem } from "@/app/api/api";

interface Props {
  item: TodoItem;
}

export function TodoCardTitle(props: Props) {
  // Initial title from props upon first rendering
  const [title, setTitle] = useState(props.item.title);
  const doCallServerAction = useContext(ServerActionContext);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

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
