import { FocusEventHandler } from "react";
import styles from "./TodoCardDescriptionBodyInput.module.css";

interface Props {
  description: string;
  // optional args, so that you can check component's design alone
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: FocusEventHandler<HTMLTextAreaElement>;
}

export function TodoCardDescriptionBodyInput(props: Props) {
  return (
    <textarea
      className={styles.component}
      name="description"
      value={props.description}
      autoFocus
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}
