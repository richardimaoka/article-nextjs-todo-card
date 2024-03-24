"use client";

import { TodoComment, TodoItem } from "@/app/api/types";
import { ServerActionContext } from "@/app/components/ServerActionContext";
import { useContext, useState } from "react";
import { TodoCardCommentBodyTextArea } from "./TodoCardCommentBodyTextArea";
import { TodoCardCommentBodyDisplay } from "./TodoCardCommentBodyDisplay";
import { updateTodoCommentAction } from "@/app/api/actions";

interface Props {
  item: TodoItem;
  comment: TodoComment;
}

export function TodoCardCommentBody(props: Props) {
  // Initial title from props upon first rendering
  const [commentBody, setCommentBody] = useState(props.comment.body);

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
    setCommentBody(newBody);
    setEdit(false);

    if (doCallServerAction) {
      updateTodoCommentAction(props.item.id, props.comment.id, newBody);
    }
  }

  return edit ? (
    <TodoCardCommentBodyTextArea
      commentBody={commentBody}
      onBlur={(e) => editFinished(e.target.value)}
      onChange={(e) => editInProgress(e.target.value)}
    />
  ) : (
    <TodoCardCommentBodyDisplay commentBody={commentBody} onClick={editStart} />
  );
}
