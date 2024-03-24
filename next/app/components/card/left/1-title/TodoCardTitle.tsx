"use client";

import { TodoItem } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { useContext, useEffect, useState } from "react";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import { updateTodoTitleAction } from "@/app/api/actions";

interface Props {
  item: TodoItem;
}

export function TodoCardTitle(props: Props) {
  // Initial title from props upon first rendering
  const [title, setTitle] = useState(props.item.title);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  useEffect(() => {
    console.log("rendering rendering");
  }, []);

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setTitle(newTitle);
    setEdit(true);
  }

  async function editFinished(newTitle: string) {
    // finish editing
    setTitle(newTitle);
    setEdit(false);

    if (doCallServerAction) {
      await updateTodoTitleAction(props.item.id, newTitle);
    }
  }

  return edit ? (
    <TodoCardTitleInput
      title={title}
      onBlur={async (e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardTitleDisplay title={title} onClick={editStart} />
  );
}
