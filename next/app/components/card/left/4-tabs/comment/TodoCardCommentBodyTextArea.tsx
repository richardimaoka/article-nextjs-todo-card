import { FocusEventHandler } from "react";
import styles from "./TodoCardCommentBodyTextArea.module.css";

interface Props {
  commentBody: string;
  // optional args, so that you can check component's design alone
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: FocusEventHandler<HTMLTextAreaElement>;
}

export function TodoCardCommentBodyTextArea(props: Props) {
  return (
    <textarea
      className={styles.component}
      name="comment"
      value={props.commentBody}
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
