"use client";

import { TodoItem } from "@/app/api/types";
import { useState } from "react";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";

interface Props {
  item: TodoItem;
  updateTodo: (newItem: TodoItem, inProgress: boolean) => void;
}

export function TodoCardTitle(props: Props) {
  const [edit, setEdit] = useState(false);

  function editInProgress(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    // finish editing
    setEdit(true);

    // call upateTodo in parent
    props.updateTodo(newItem, true);
  }

  function editFinished(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    // finish editing
    setEdit(false);

    // call upateTodo in parent
    props.updateTodo(newItem, false);
  }

  return edit ? (
    <TodoCardTitleDisplay title={props.item.title} />
  ) : (
    <TodoCardTitleInput
      title={props.item.title}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  );
}
