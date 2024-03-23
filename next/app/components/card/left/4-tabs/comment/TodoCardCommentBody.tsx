"use client";

import { updateTodoComment } from "@/app/api/api";
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
  const [initialCommentBody] = useState(props.comment.body);
  const [commentBody, setCommentBody] = useState(initialCommentBody);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  // Adjusting (stale) state when props change - https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (initialCommentBody !== props.comment.body) {
    setCommentBody(props.comment.body);
  }

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
