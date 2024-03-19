"use client";

import { ChangeEvent, useState } from "react";

interface Props {
  title: string;
  updateTitle: (newTitle: string) => void;
}

export function TitleInput(props: Props) {
  const [edit, setEdit] = useState(false);

  function onClick() {
    setEdit(true);
  }

  function onBlur() {
    setEdit(false);
    // server action
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    props.updateTitle(e.target.value);
  }

  return edit ? (
    <div style={{ width: "800px", height: "30px", backgroundColor: "white" }}>
      <input
        name="title"
        onBlur={onBlur}
        autoFocus
        placeholder="enter title"
        value={props.title}
        onChange={onChange}
      />
    </div>
  ) : (
    <div
      style={{ width: "800px", height: "30px", backgroundColor: "white" }}
      onClick={onClick}
    >
      <div>{props.title}</div>
      <input
        // This <input> needs to be a different from the above <input>,
        // which is used when `edit = true`.
        // Otherwise autoFocus doesn't take effect when `edit` changes
        type="hidden"
        name="title"
        value={props.title}
      />
    </div>
  );
}
