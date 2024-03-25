import styles from "./TodoCardCommentDisplay.module.css";

interface Props {
  commentBody: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardCommentDisplay(props: Props) {
  return (
    <div className={styles.component} onClick={props.onClick}>
      {props.commentBody}
    </div>
  );
}
