"use server";

import { z } from "zod";
import {
  TodoItem,
  TodoLabel,
  TodoPerson,
  TodoStatus,
  addTodoComment,
  addTodoLabel,
  addWatcher,
  createTodoComment,
  removeTodoComment,
  removeTodoLabel,
  removeWatcher,
  updateAssignee,
  updateDueDate,
  updateStatus,
  updateTodoComment,
  updateTodoDescription,
  updateTodoTitle,
} from "./types";
import { revalidatePath } from "next/cache";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Mutate data
}

export async function send(args: any) {
  console.log(args);
}

export async function updateTodoTitleAction(
  todoId: string,
  newTitle: string
): Promise<TodoItem> {
  console.log(
    `calling server action updateTodoTitleAction, todoId = '${todoId}', newTitle = '${newTitle}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateTodoTitle(todo, newTitle);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function updateTodoDescriptionAction(
  todoId: string,
  newDescription: string
): Promise<TodoItem> {
  console.log(
    `calling server action updateTodoDescriptionAction, todoId = '${todoId}', newDescription = '${newDescription}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateTodoDescription(todo, newDescription);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function addTodoCommentAction(
  todoId: string,
  newCommentBody: string,
  author: TodoPerson
): Promise<TodoItem> {
  console.log(
    `calling server action addTodoCommentAction, todoId = '${todoId}', newCommentBody = '${newCommentBody}', author = ${JSON.stringify(
      author
    )}`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newComment = createTodoComment(newCommentBody, author);
  const newTodo = addTodoComment(todo, newComment);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function removeTodoCommentAction(
  todoId: string,
  commentId: string
): Promise<TodoItem> {
  console.log(
    `calling server action removeTodoCommentAction, todoId = '${todoId}', commentId = '${commentId}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = removeTodoComment(todo, commentId);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function updateTodoCommentAction(
  todoId: string,
  commentId: string,
  newCommentBody: string
): Promise<TodoItem> {
  console.log(
    `calling server action updateTodoCommentAction, todoId = '${todoId}', commentId = '${commentId}', newCommentBody = '${newCommentBody}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateTodoComment(todo, commentId, newCommentBody);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function addTodoLabelAction(
  todoId: string,
  newLabel: TodoLabel
): Promise<TodoItem> {
  console.log(
    `calling server action addTodoLabelAction, todoId = '${todoId}', newLabel = ${JSON.stringify(
      newLabel
    )}`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = addTodoLabel(todo, newLabel);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function removeTodoLabelAction(
  todoId: string,
  labelId: string
): Promise<TodoItem> {
  console.log(
    `calling server action removeTodoLabelAction, todoId = '${todoId}', labelId = '${labelId}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = removeTodoLabel(todo, labelId);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function addWatcherAction(
  todoId: string,
  newWatcher: TodoPerson
): Promise<TodoItem> {
  console.log(
    `calling server action addWatcherAction, todoId = '${todoId}', newWatcher = '${JSON.stringify(
      newWatcher
    )}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = addWatcher(todo, newWatcher);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}
export async function removeWatcherAction(
  todoId: string,
  watcherId: string
): Promise<TodoItem> {
  console.log(
    `calling server action removeWatcherAction, todoId = '${todoId}', watcherId = '${watcherId}', `
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = removeWatcher(todo, watcherId);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function updateAssigneeAction(
  todoId: string,
  newAssignee: TodoPerson
): Promise<TodoItem> {
  console.log(
    `calling server action updateAssigneeAction, todoId = '${todoId}', newAssignee = '${JSON.stringify(
      newAssignee
    )}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateAssignee(todo, newAssignee);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function updateStatusAction(
  todoId: string,
  newStatus: TodoStatus
): Promise<TodoItem> {
  console.log(
    `calling server action updateStatusAction, todoId = '${todoId}', newAssignee = '${newStatus}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateStatus(todo, newStatus);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}

export async function updateDueDateAction(
  todoId: string,
  newDueDate: string
): Promise<TodoItem> {
  console.log(
    `calling server action updateDueDateAction, todoId = '${todoId}', newDueDate = '${newDueDate}'`
  );

  const url = `http://localhost:3036/items/${todoId}`;

  const getResponse = await fetch(url);
  const todo: TodoItem = await getResponse.json();
  const newTodo = updateDueDate(todo, newDueDate);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/items/edit");
  return response.json();
}
