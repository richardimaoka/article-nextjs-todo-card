"use server";

import { z } from "zod";
import { TodoItem } from "./types";
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

export async function updateTodo(formData: FormData) {
  const a = formData.get("title");
  console.log(a);

  // const url = "http://localhost:3036/items";
  // const response = await fetch(url, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({}),
  // });

  // return response.json();
}

export async function updateTodoItemAction(item: TodoItem): Promise<TodoItem> {
  console.log(`calling server action ${JSON.stringify(item)}`);

  const url = `http://localhost:3036/items/${item.id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  revalidatePath("/components/card/test");
  return response.json();
}
