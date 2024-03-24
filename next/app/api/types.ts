import { v4 as uuidv4 } from "uuid";

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  dueDate?: string;
  comments?: TodoComment[];
  labels?: TodoLabel[];
  assignee?: TodoPerson;
  watchers?: TodoPerson[];
};

export type TodoStatus = "In Progress" | "Done" | "Canceled";

export type TodoComment = {
  id: string;
  body: string;
  author: TodoPerson;
  createdAt: Date;
};

export type TodoLabel = {
  id: string;
  name: string;
  color: string;
};

export type TodoPerson = {
  id: string;
  name: string;
  imagePath: string;
};

// done
export function updateTodoTitle(todo: TodoItem, newTitle: string): TodoItem {
  return { ...todo, title: newTitle };
}

// done
export function updateTodoDescription(
  todo: TodoItem,
  newDescription: string
): TodoItem {
  return { ...todo, description: newDescription };
}

// done
export function createTodoComment(
  body: string,
  author: TodoPerson
): TodoComment {
  // ID generation and timestamp are external dependencies but internalize them for simplicity
  const id = uuidv4();
  const now = new Date();

  return { id: id, body: body, author: author, createdAt: now };
}

// done
export function addTodoComment(
  todo: TodoItem,
  newComment: TodoComment
): TodoItem {
  // For simplicity, not checking if it already exists, but in produciton, handle error more explicitly

  const newComments: TodoComment[] = todo.comments ? { ...todo.comments } : [];

  // Logic to update
  newComments.push(newComment);

  const newTodo: TodoItem = { ...todo, comments: newComments };

  return newTodo;
}

// done
export function removeTodoComment(todo: TodoItem, commentId: string): TodoItem {
  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  if (!todo.comments) return todo;

  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  const index = todo.comments.findIndex((x) => x.id === commentId);
  if (!index) return todo;

  // Logic to update
  const newComments: TodoComment[] = { ...todo.comments };
  // If you do not specify any elements, splice() will only remove elements from the array.
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  newComments.splice(index);

  const newTodo: TodoItem = { ...todo, comments: newComments };

  return newTodo;
}

// done
export function updateTodoComment(
  todo: TodoItem,
  commentId: string,
  newCommentBody: string
): TodoItem {
  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  if (!todo.comments) return todo;

  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  const index = todo.comments.findIndex((x) => x.id === commentId);
  if (!index) return todo;

  // Logic to update
  const comment = todo.comments[index];
  const newComment: TodoComment = { ...comment, body: newCommentBody };

  const newComments: TodoComment[] = { ...todo.comments };
  newComments[index] = newComment;

  const newTodo: TodoItem = { ...todo, comments: newComments };

  return newTodo;
}

// done
export function createTodoLabel(name: string, color: string): TodoLabel {
  // ID generation is an external dependency but internalize it for simplicity
  const id = uuidv4();

  return { id, name, color };
}

// done
export function addTodoLabel(todo: TodoItem, newLabel: TodoLabel): TodoItem {
  // For simplicity, not checking if it already exists, but in produciton, handle error more explicitly

  const newLabels: TodoLabel[] = todo.labels ? { ...todo.labels } : [];

  // Logic to update
  newLabels.push(newLabel);

  const newTodo: TodoItem = { ...todo, labels: newLabels };

  return newTodo;
}

// done
export function removeTodoLabel(todo: TodoItem, labelId: string): TodoItem {
  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  if (!todo.labels) return todo;

  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  const index = todo.labels.findIndex((x) => x.id === labelId);
  if (!index) return todo;

  // Logic to update
  const newLabels: TodoLabel[] = { ...todo.labels };
  // If you do not specify any elements, splice() will only remove elements from the array.
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  newLabels.splice(index);

  const newTodo: TodoItem = { ...todo, labels: newLabels };

  return newTodo;
}

// done
export function addWatcher(todo: TodoItem, newWatcher: TodoPerson): TodoItem {
  // For simplicity, not checking if it already exists, but in produciton, handle error more explicitly

  const newWatchers: TodoPerson[] = todo.watchers ? { ...todo.watchers } : [];

  // Logic to update
  newWatchers.push(newWatcher);

  const newTodo: TodoItem = { ...todo, watchers: newWatchers };

  return newTodo;
}

// done
export function removeWatcher(todo: TodoItem, watcherId: string): TodoItem {
  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  if (!todo.watchers) return todo;

  // For simplicity, upon failure, just return the unchanged todo, but in production, handle error more explicitly
  const index = todo.watchers.findIndex((x) => x.id === watcherId);
  if (!index) return todo;

  // Logic to update
  const newWatchers: TodoPerson[] = { ...todo.watchers };
  // If you do not specify any elements, splice() will only remove elements from the array.
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  newWatchers.splice(index);

  const newTodo: TodoItem = { ...todo, watchers: newWatchers };

  return newTodo;
}

// done
export function updateAssignee(
  todo: TodoItem,
  newAssignee: TodoPerson
): TodoItem {
  const newTodo: TodoItem = { ...todo, assignee: newAssignee };
  return newTodo;
}

// done
export function updateStatus(todo: TodoItem, newStatus: TodoStatus): TodoItem {
  const newTodo: TodoItem = { ...todo, status: newStatus };
  return newTodo;
}

// done
export function updateDueDate(todo: TodoItem, newDueDate: string): TodoItem {
  const newTodo: TodoItem = { ...todo, dueDate: newDueDate };
  return newTodo;
}

// done
export function crateEmptyTodo(): TodoItem {
  // ID generation and timestamp are external dependencies but internalize them for simplicity
  const id = uuidv4();
  const now = new Date();

  return {
    id: id,
    title: "",
    description: "",
    status: "In Progress",
    dueDate: now.toDateString(),
  };
}
