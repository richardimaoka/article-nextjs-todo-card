"use client";

import { useContext, useState } from "react";

import { addTodoCommentAction } from "@/app/api/actions";
import { TodoItem } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { TodoCardCommentAddButton } from "./TodoCardCommentAddButton";
import { TodoCardCommentTextArea } from "./TodoCardCommentTextArea";

interface Props {
  item: TodoItem;
}

export function TodoCardNewComment(props: Props) {
  // Initial title from props upon first rendering
  const [commentBody, setCommentBody] = useState("");

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  function editStart() {
    setEdit(true);
  }

  function editInProgress(newTitle: string) {
    setCommentBody(newTitle);
    setEdit(true);
  }

  async function editFinished(newBody: string) {
    // finish editing
    setEdit(false);

    // call server action only when newBody is not empty
    if (newBody !== "" && doCallServerAction) {
      addTodoCommentAction(props.item.id, commentBody);
      setCommentBody(""); //clear the state for the next attempt
    }
  }

  return edit ? (
    <TodoCardCommentTextArea
      commentBody={commentBody}
      onChange={(e) => editInProgress(e.target.value)}
      onBlur={(e) => editFinished(e.target.value)}
    />
  ) : (
    <div>
      <TodoCardCommentAddButton onClick={editStart} />
    </div>
  );
}
