import styles from "./TodoCardCommentBody.module.css";

interface Props {
  commentBody: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardCommentBody(props: Props) {
  return <div className={styles.component}>{props.commentBody}</div>;
}
