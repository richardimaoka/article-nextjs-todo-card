"use client";

import { FocusEventHandler, useEffect, useRef } from "react";
import styles from "./TodoCardDescriptionTextArea.module.css";

interface Props {
  description: string;
  // optional args, so that you can check component's design alone
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: FocusEventHandler<HTMLTextAreaElement>;
}

export function TodoCardDescriptionTextArea(props: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight);
    }
  }, []);

  return (
    <textarea
      ref={ref}
      className={styles.component}
      name="description"
      value={props.description}
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
