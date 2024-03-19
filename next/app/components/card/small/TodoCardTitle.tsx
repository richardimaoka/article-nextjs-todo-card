"use client";

import { TodoItem } from "@/app/api/types";
import { useState } from "react";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import { updateTodoItem } from "@/app/api/actions";

interface Props {
  item: TodoItem;
}

export function TodoCardTitle(props: Props) {
  // Set the initial title from props upon first rendering
  const [title, setTitle] = useState(props.item.title);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setTitle(newTitle);
  }

  async function editFinished(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    // finish editing
    setEdit(false);

    // call server action
    updateTodoItem(newItem);
  }

  return edit ? (
    <TodoCardTitleDisplay title={props.item.title} onClick={editStart} />
  ) : (
    <TodoCardTitleInput
      title={title}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  );
}
