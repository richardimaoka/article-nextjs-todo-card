import { TodoStatus } from "@/app/api/types";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import styles from "./TodoStatusSelect.module.css";
import { FocusEventHandler, MouseEventHandler } from "react";

interface Props {
  currentStatus: TodoStatus;
  // optional args, so that you can check component's design alone
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onSelect?: (newStatus: TodoStatus) => void;
}

export function TodoStatusSelect(props: Props) {
  return (
    <div className={styles.component} onBlur={props.onBlur}>
      {props.currentStatus !== "In Progress" && (
        <div
        // onClick={() => {
        //   props.onSelect && props.onSelect("In Progress");
        // }}
        >
          <TodoCardStatusLabel status="In Progress" />
        </div>
      )}
      {props.currentStatus !== "Done" && (
        <div
        // onClick={() => {
        //   props.onSelect && props.onSelect("Done");
        // }}
        >
          <TodoCardStatusLabel status="Done" />
        </div>
      )}
      {props.currentStatus !== "Canceled" && (
        <div
        // onClick={() => {
        //   props.onSelect && props.onSelect("Canceled");
        // }}
        >
          <TodoCardStatusLabel status="Canceled" />
        </div>
      )}
    </div>
  );
}
