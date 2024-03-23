"use client";

import { TodoItem, TodoStatus } from "@/app/api/types";
import styles from "./TodoCardStatus.module.css";
import { TodoCardStatusButton } from "./TodoCardStatusButton";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoStatusSelect } from "./TodoStatusSelect";
import { useContext, useEffect, useRef, useState } from "react";
import { ServerActionContext } from "@/app/components/ServerActionContext";

interface Props {
  item: TodoItem;
}

export function TodoCardStatus(props: Props) {
  // Initial title from props upon first rendering
  const [initialStatus] = useState(props.item.status);
  const [status, setStatus] = useState(initialStatus);

  // `edit` state allows title to temporarily diverge from props
  const [edit, setEdit] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // Dependency injection to call or not to call server action
  const doCallServerAction = useContext(ServerActionContext);

  // Adjusting (stale) state when props change - https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (initialStatus !== props.item.status) {
    setStatus(props.item.status);
  }

  function editStart() {
    setEdit(true);
  }

  async function editCanceled() {
    console.log("edit cacneled");
    // cancel editing
    setEdit(false);
  }

  // Hook to handle click outside of select area
  //   https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  useEffect(() => {
    //   https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
    function isNode(e: EventTarget | null): e is Node {
      if (!e || !("nodeType" in e)) {
        return false;
      } else {
        return true;
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        isNode(event.target) &&
        !ref.current.contains(event.target)
      ) {
        editCanceled();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, edit]);

  return (
    <div className={styles.component}>
      <div className={styles.button}>
        <TodoCardStatusLabel status={status} />
        <TodoCardStatusButton status={status} onClick={editStart} />
      </div>

      {edit && (
        <div className={styles.select} ref={ref}>
          <TodoStatusSelect currentStatus={status} onBlur={editCanceled} />
        </div>
      )}
    </div>
  );
}
