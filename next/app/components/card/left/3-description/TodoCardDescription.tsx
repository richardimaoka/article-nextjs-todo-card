"use client";

import { TodoItem, updateTodoDescription } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { useContext, useState } from "react";
import { TodoCardDescriptionDisplay } from "./TodoCardDescriptionDisplay";
import { TodoCardDescriptionTextArea } from "./TodoCardDescriptionTextArea";
import { updateTodoDescriptionAction } from "@/app/api/actions";

interface Props {
  item: TodoItem;
}

export function TodoCardDescription(props: Props) {
  // Initial description from props upon first rendering
  const [description, setDescription] = useState(props.item.description);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setDescription(newTitle);
    setEdit(true);
  }

  async function editFinished(newDescription: string) {
    // finish editing
    setDescription(newDescription);
    setEdit(false);

    if (doCallServerAction) {
      updateTodoDescriptionAction(props.item.id, newDescription);
    }
  }

  return edit ? (
    <TodoCardDescriptionTextArea
      description={description}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardDescriptionDisplay description={description} onClick={editStart} />
  );
}
