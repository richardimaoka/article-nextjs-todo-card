import { updateTodoItemAction } from "./actions";
import { TodoItem, TodoComment } from "./types";

export async function updateTodoItem(
  callServer: boolean,
  newItem: TodoItem
): Promise<TodoItem> {
  if (callServer) {
    return updateTodoItemAction(newItem);
  } else {
    return newItem;
  }
}

export async function updateTodoComment(
  callServer: boolean,
  newComment: TodoComment
): Promise<TodoComment> {
  if (callServer) {
    // return updateTodoItemAction(newComment);
    throw new Error("not implemented yet");
  } else {
    return newComment;
  }
}
