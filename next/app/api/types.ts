export type TodoItem = {
  id: string;
  title: string;
  description: string;
  comments?: TodoComment[];
};

export type TodoCommentAuthor = {
  name: string;
  imagePath: string;
};

export type TodoComment = {
  id: string;
  body: string;
  author: TodoCommentAuthor;
  createdAt: string;
};

export function updateTodoTitle(todo: TodoItem, newTitle: string): TodoItem {
  return { ...todo, title: newTitle };
}

export function updateTodoDescription(
  todo: TodoItem,
  newDescription: string
): TodoItem {
  return { ...todo, description: newDescription };
}

export function updateTodoComment(
  todo: TodoItem,
  commentId: string,
  newCommentBody: string
): TodoItem {
  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  if (!todo.comments) return todo;

  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  const index = todo.comments?.findIndex((x) => x.id === commentId);
  if (!index) return todo;

  // Logic to update comment
  const comment = todo.comments[index];
  const updatedComment: TodoComment = { ...comment, body: newCommentBody };

  const updatedComments: TodoComment[] = { ...todo.comments };
  updatedComments[index] = updatedComment;

  const updatedTodo: TodoItem = { ...todo, comments: updatedComments };

  return updatedTodo;
}
