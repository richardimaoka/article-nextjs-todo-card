"use client";

import { TodoItem } from "@/app/api/types";
import { useState } from "react";
import { TitleInput } from "./TitleInput";
import { updateTodo } from "@/app/api/actions";

type Props = {
  item: TodoItem;
};

export function TodoForm(props: Props) {
  const [state, setState] = useState(props.item);

  function updateTitle(newTitle: string) {
    setState({
      ...state,
      description: newTitle,
    });
  }

  return (
    <form action={updateTodo}>
      <TitleInput title={state.description} updateTitle={updateTitle} />
      <button type="submit">submit</button>
    </form>
  );
}
