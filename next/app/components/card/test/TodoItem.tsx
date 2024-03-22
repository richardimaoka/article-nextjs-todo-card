"use client";

import { TodoItem } from "@/app/api/types";
import { useEffect, useState } from "react";

interface Props {
  item: TodoItem;
}

type EditStatus = "Initial" | "Editing" | "Edited";

export function TodoItem(props: Props) {
  // initialize state on first render
  const [item, setItem] = useState(props.item);
  const [editStatus, setEditStatus] = useState<EditStatus>("Initial");

  function editTitle(newTitle: string, finished: boolean) {
    setItem({ ...item, description: newTitle });

    if (finished) {
      setEditStatus("Edited");
    } else {
      setEditStatus("Editing");
    }
  }

  function editDescription(newDescription: string, finished: boolean) {
    setItem({ ...item, description: newDescription });

    if (finished) {
      setEditStatus("Edited");
    } else {
      setEditStatus("Editing");
    }
  }

  function editItem(newItem: TodoItem, finished: boolean) {
    setItem(newItem);

    if (finished) {
      setEditStatus("Edited");
    } else {
      setEditStatus("Editing");
    }
  }

  useEffect(() => {
    async function updateView() {
      // const newItem = await serverAction()
      // setItem(newItem)
    }

    if (editStatus === "Edited") {
      updateView();
    }
  }, [editStatus]);

  return <div></div>;
}
