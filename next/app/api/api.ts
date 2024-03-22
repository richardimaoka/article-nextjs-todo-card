import { TodoComment } from "./types";

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
