"use client";

import { TodoItem } from "@/app/api/types";
import { useState } from "react";
import { updateTodoItemAction } from "@/app/api/actions";
import { TodoCardDescriptionBodyTextArea } from "./TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionBodyDisplay } from "./TodoCardDescriptionBodyDisplay";

interface Props {
  item: TodoItem;
}

export function TodoCardDescriptionBody(props: Props) {
  // Initial title from props upon first rendering
  const [description, setDescription] = useState(props.item.description);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setDescription(newTitle);
    setEdit(true);
  }

  async function editFinished(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    // finish editing
    setEdit(false);

    // call server action
    updateTodoItemAction(newItem);
  }

  return edit ? (
    <TodoCardDescriptionBodyTextArea
      description={description}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardDescriptionBodyDisplay
      description={props.item.description}
      onClick={editStart}
    />
  );
}
