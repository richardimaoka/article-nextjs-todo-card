import { updateTodoItemAction } from "./actions";
import { TodoItem } from "./types";

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
