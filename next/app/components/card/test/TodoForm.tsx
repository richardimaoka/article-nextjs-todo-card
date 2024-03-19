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
      title: newTitle,
    });
  }

  return (
    <form action={updateTodo}>
      <TitleInput title={state.title} updateTitle={updateTitle} />
      <button type="submit">submit</button>
    </form>
  );
}
