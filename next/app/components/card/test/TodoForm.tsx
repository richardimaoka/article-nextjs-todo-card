"use client";

import { TodoItem } from "@/app/api/types";
import { useState } from "react";
import { TitleInput } from "./TitleInput";

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
    <form>
      <TitleInput title={state.title} updateTitle={updateTitle} />
    </form>
  );
}
