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
      readOnly={
        // To avoid the below warning.
        //   Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`
        !props.onChange
      }
      onBlur={props.onBlur}
    />
  );
}
