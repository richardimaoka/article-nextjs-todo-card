"use client";

import { ChangeEvent, useState } from "react";

interface Props {
  title: string;
}

export function TitleInput(props: Props) {
  const [edit, setEdit] = useState(false);

  // Initialize the `title` state with the props value upon first rendering
  const [title, setTitle] = useState(props.title);

  function onClick() {
    setEdit(true);
  }

  function onBlur() {
    setEdit(false);
    // server action
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return edit ? (
    <div style={{ width: "800px", height: "30px", backgroundColor: "white" }}>
      <input
        onBlur={onBlur}
        autoFocus
        placeholder="enter title"
        value={title}
        onChange={onChange}
      />
    </div>
  ) : (
    <div
      style={{ width: "800px", height: "30px", backgroundColor: "white" }}
      onClick={onClick}
    >
      <div>{title}</div>
    </div>
  );
}
