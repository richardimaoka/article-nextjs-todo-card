"use client";

import { updateTodoItem } from "@/app/api/api";
import { TodoItem } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { useContext, useState } from "react";
import { TodoCardDescriptionBodyDisplay } from "./TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./TodoCardDescriptionBodyTextArea";

interface Props {
  item: TodoItem;
}

export function TodoCardDescriptionBody(props: Props) {
  // Initial description from props upon first rendering
  const [initialDescription] = useState(props.item.description);
  const [description, setDescription] = useState(initialDescription);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  // Adjusting (stale) state when a prop changes - https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (initialDescription !== props.item.description) {
    setDescription(props.item.description);
  }

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
    updateTodoItem(doCallServerAction, newItem);
  }

  return edit ? (
    <TodoCardDescriptionBodyTextArea
      description={description}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardDescriptionBodyDisplay
      description={description}
      onClick={editStart}
    />
  );
}
