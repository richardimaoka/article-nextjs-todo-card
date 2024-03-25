"use client";

import { useContext, useState } from "react";

import { ServerActionContext } from "@/app/components/ServerActionContext";
import { TodoComment, TodoItem, TodoPerson } from "@/app/api/types";
import { TodoCardCommentAddButton } from "./TodoCardCommentAddButton";
import { addTodoCommentAction } from "@/app/api/actions";
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
    setCommentBody(newBody);
    setEdit(false);

    if (doCallServerAction) {
      addTodoCommentAction(props.item.id, commentBody);
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
