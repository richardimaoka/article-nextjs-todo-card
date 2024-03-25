"use client";

import styles from "./TodoCardCommentAddButton.module.css";

interface Props {
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardCommentAddButton(props: Props) {
  return (
    <button
      className={styles.component}
      onClick={() => props.onClick && props.onClick()}
    >
      Add Comment
    </button>
  );
}
