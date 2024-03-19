"use server";

import { z } from "zod";

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

type TodoItem = {
  title: string;
  description: string;
};

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
