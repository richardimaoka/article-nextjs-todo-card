import { TodoItem } from "@/app/api/types";
import { useState } from "react";

interface Props {
  item: TodoItem;
  updateTodo: (newItem: TodoItem, inProgress: boolean) => void;
}

export function TodoTitle(props: Props) {
  const [edit, setEdit] = useState(false);

  function editInProgress(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    setEdit(true);
    props.updateTodo(newItem, true);
  }

  function editFinished(newTitle: string) {
    const newItem = { ...props.item, title: newTitle };

    setEdit(false);
    props.updateTodo(newItem, false);
  }

  return (
    <div style={{ width: "800px", height: "30px", backgroundColor: "white" }}>
      {edit ? (
        <input
          name="title"
          value={props.item.title}
          placeholder="enter title"
          autoFocus
          onBlur={(e) => {
            editFinished(e.target.value);
          }}
          onChange={(e) => {
            editInProgress(e.target.value);
          }}
        />
      ) : (
        <div>{props.item.title}</div>
      )}
    </div>
  );
}
