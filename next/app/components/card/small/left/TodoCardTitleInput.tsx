import { FocusEventHandler } from "react";
import styles from "./TodoCardTitleInput.module.css";

interface Props {
  title: string;
  // optional args, so that you can check component's design alone
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: FocusEventHandler<HTMLInputElement>;
}

export function TodoCardTitleInput(props: Props) {
  return (
    <input
      className={styles.component}
      name="title"
      value={props.title}
      autoFocus
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}
